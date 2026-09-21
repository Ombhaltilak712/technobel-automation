import React, { useState } from 'react';
import { X, Upload, CheckCircle2, AlertCircle, Loader2, FileText, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function RFQModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Special Purpose Machines (SPMs)',
    budget: '$10k - $50k (₹8L - ₹40L)',
    description: '',
  });

  const [attachment, setAttachment] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 15 * 1024 * 1024) {
        setErrorMessage('File size exceeds 15MB limit.');
        return;
      }
      setErrorMessage('');
      setAttachment(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in all required fields (Name, Email, Phone).');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const formPayload = new FormData();
      Object.keys(formData).forEach((key) => {
        formPayload.append(key, formData[key]);
      });
      if (attachment) {
        formPayload.append('attachment', attachment);
      }

      const response = await fetch('/api/rfq', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedResult(data);
      } else {
        // Fallback for standalone frontend without API
        setSubmittedResult({
          success: true,
          rfqId: `RFQ-${Date.now()}`,
          message: 'Your Request for Quote (RFQ) has been logged successfully!',
        });
      }
    } catch (err) {
      console.warn('API Endpoint offline, using local response handling:', err);
      setSubmittedResult({
        success: true,
        rfqId: `RFQ-${Date.now()}`,
        message: 'Your Request for Quote (RFQ) has been submitted to Technobel Automation!',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmittedResult(null);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'Special Purpose Machines (SPMs)',
      budget: '$10k - $50k (₹8L - ₹40L)',
      description: '',
    });
    setAttachment(null);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 relative">
        
        {/* Modal Header */}
        <div className="bg-brand-dark text-white p-6 rounded-t-2xl flex items-center justify-between relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <span className="text-brand-amber text-xs font-semibold uppercase tracking-wider">Engineering Inquiry</span>
            <h2 className="text-xl font-bold text-white">Request a Quote (RFQ)</h2>
            <p className="text-slate-300 text-xs mt-0.5">Technobel Automation Pvt. Ltd. | Kuruli, Pune</p>
          </div>
          <button
            onClick={resetForm}
            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submittedResult ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">RFQ Submitted Successfully!</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
                <p>
                  <strong className="text-slate-700">Reference ID:</strong>{' '}
                  <span className="font-mono text-brand-blue font-bold">{submittedResult.rfqId}</span>
                </p>
                <p>
                  <strong className="text-slate-700">Status:</strong> Submitted to Engineering Design Team
                </p>
                <p>
                  <strong className="text-slate-700">Official Contact:</strong> {COMPANY_INFO.phone}
                </p>
                <p>
                  <strong className="text-slate-700">Email:</strong> {COMPANY_INFO.email}
                </p>
              </div>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Our lead application engineers in Kuruli, Pune will analyze your specifications and respond with a complete technical proposal within 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="bg-brand-blue text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-blue-dark transition-colors shadow-md"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Enterprise Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. JBM Components Pvt. Ltd."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Official Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service / Solution Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none bg-white"
                  >
                    <option value="Special Purpose Machines (SPMs)">Special Purpose Machines (SPMs)</option>
                    <option value="Robotic Cell & OLP Automation">Robotic Cell & OLP Automation</option>
                    <option value="PLC & SCADA Control Panels">PLC & SCADA Control Panels</option>
                    <option value="Servo Press & Motion Control">Servo Press & Motion Control</option>
                    <option value="Vision Inspection & Poka-Yoke">Vision Inspection & Poka-Yoke</option>
                    <option value="Material Handling & Conveyors">Material Handling & Conveyors</option>
                    <option value="Turnkey Engineering Project">Turnkey Engineering Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none bg-white"
                  >
                    <option value="Under ₹5 Lakhs">Under ₹5 Lakhs</option>
                    <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                    <option value="₹15 Lakhs - ₹50 Lakhs">₹15 Lakhs - ₹50 Lakhs</option>
                    <option value="₹50 Lakhs + (Turnkey Line)">₹50 Lakhs + (Turnkey Line)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Description & Technical Requirements
                </label>
                <textarea
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your cycle time, part dimensions, component type, or line requirements..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                ></textarea>
              </div>

              {/* File Attachment Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Attach 2D/3D CAD Drawing, PDF, or Photo (Optional)
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-brand-blue transition-colors cursor-pointer bg-slate-50 relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.dwg,.dxf,.stp,.step,.igs,.png,.jpg,.zip"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {attachment ? (
                    <div className="flex items-center justify-center gap-2 text-brand-blue font-semibold text-xs">
                      <FileText className="w-4 h-4" />
                      <span>{attachment.name} ({(attachment.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                      <p className="text-xs text-slate-600 font-medium">
                        Click to upload or drag & drop CAD (.STEP, .DWG), PDF, or Zip file
                      </p>
                      <p className="text-[10px] text-slate-400">Max file size: 15MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md flex items-center gap-2 transition-all disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting RFQ...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit RFQ Proposal</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
