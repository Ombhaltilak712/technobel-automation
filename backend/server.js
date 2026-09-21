import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for file attachments
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB limit
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.pdf', '.dwg', '.dxf', '.stp', '.step', '.igs', '.iges', '.png', '.jpg', '.jpeg', '.zip', '.rar', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file format. Please upload CAD, PDF, Image, or Archive files.'));
    }
  },
});

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(uploadDir));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    company: 'Technobel Automation Pvt. Ltd.',
    timestamp: new Date().toISOString(),
    location: 'Kuruli, Khed, Pune, Maharashtra, India',
  });
});

// Inquiry Contact Endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, company, email, phone, service, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, Email, and Phone number are required fields.',
      });
    }

    const submissionData = {
      id: `INQ-${Date.now()}`,
      name,
      company: company || 'Not specified',
      email,
      phone,
      service: service || 'General Inquiry',
      message: message || '',
      submittedAt: new Date().toISOString(),
      status: 'Received',
    };

    console.log('[API CONTACT SUBMISSION]', submissionData);

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out to Technobel Automation! Our engineering team will contact you within 24 business hours.',
      inquiryId: submissionData.id,
      recipientEmail: 'Info.technobelautomation@gmail.com',
    });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing your inquiry.',
    });
  }
});

// Request for Quote (RFQ) Endpoint with Attachment
app.post('/api/rfq', upload.single('attachment'), (req, res) => {
  try {
    const { name, company, email, phone, service, budget, description } = req.body;

    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: 'Name, Email, Phone, and Service selection are required.',
      });
    }

    let fileDetails = null;
    if (req.file) {
      fileDetails = {
        filename: req.file.filename,
        originalName: req.file.originalname,
        sizeBytes: req.file.size,
        path: `/uploads/${req.file.filename}`,
      };
    }

    const rfqData = {
      rfqId: `RFQ-${Date.now()}`,
      name,
      company: company || 'Not specified',
      email,
      phone,
      service,
      budget: budget || 'To be discussed',
      description: description || '',
      attachment: fileDetails,
      submittedAt: new Date().toISOString(),
      status: 'Submitted for Technical Review',
    };

    console.log('[API RFQ SUBMISSION]', rfqData);

    return res.status(200).json({
      success: true,
      message: 'Your Request for Quote (RFQ) has been successfully submitted to Technobel Automation engineering team.',
      rfqId: rfqData.rfqId,
      fileReceived: !!fileDetails,
      officialContact: '+91 9185202138',
      officialEmail: 'Info.technobelautomation@gmail.com',
    });
  } catch (error) {
    console.error('Error handling RFQ submission:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error processing RFQ.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`[Technobel Automation API] Server running on http://localhost:${PORT}`);
});
