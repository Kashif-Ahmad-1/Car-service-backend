const PDFDocument = require('pdfkit');

const generatePDF = (appointment, res) => {
  try {
    const doc = new PDFDocument();
    let filename = `Appointment_${appointment._id}.pdf`;

    // Set headers for PDF response
    res.setHeader('Content-disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-type', 'application/pdf');

    doc.pipe(res);

    // Add PDF content
    doc.fontSize(16).text('Appointment Details', { underline: true });
    doc.fontSize(12).text(`Client Name: ${appointment.clientName}`);
    doc.text(`Client Address: ${appointment.clientAddress}`);
    doc.text(`Contact Person: ${appointment.contactPerson}`);
    doc.text(`Mobile No.: ${appointment.mobileNo}`);
    doc.text(`Invoice Date: ${new Date(appointment.invoiceDate).toDateString()}`);
    doc.text(`Invoice Amount: ${appointment.invoiceAmount}`);
    doc.text(`Machine Name: ${appointment.machineName}`);
    doc.text(`Model: ${appointment.model}`);
    doc.text(`Part No.: ${appointment.partNo}`);
    doc.text(`Serial No.: ${appointment.serialNo}`);
    doc.text(`Installation Date: ${new Date(appointment.installationDate).toDateString()}`);
    doc.text(`Service Frequency: ${appointment.serviceFrequency}`);
    doc.text(`Expected Service Date: ${new Date(appointment.expectedServiceDate).toDateString()}`);
    doc.text(`Service Engineer: ${appointment.serviceEngineer}`);

    doc.end(); // Finalize the PDF
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
};

module.exports = { generatePDF };
