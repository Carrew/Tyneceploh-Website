
// Quotes array for homepage announcements
const quotes = [
  {text: "Education is the key to success.", author: "Tyneceploh Foundation"},
  {text: "Every child deserves an opportunity to learn.", author: "Founder"},
  {text: "Knowledge empowers the future.", author: "Principal"},
  {text: "Learning today, leading tomorrow.", author: "Teacher"},
  {text: "Together we grow and succeed.", author: "Community"},
];

// Display random quote on homepage
function displayRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-text').textContent = `"${quote.text}"`;
  document.getElementById('quote-author').textContent = `- ${quote.author}`;
}

document.addEventListener('DOMContentLoaded', () => {
  displayRandomQuote();

  // Results Checker Logic
  const resultsForm = document.getElementById('results-form');
  if (resultsForm) {
    resultsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const studentId = document.getElementById('student-id').value.trim();
      const studentPin = document.getElementById('student-pin').value.trim();

      // Simulated student data with PIN and results
      const students = {
        "1234": {pin: "4321", results: {"Math": 85, "English": 78, "Science": 92}},
        "5678": {pin: "8765", results: {"Math": 90, "English": 88, "Science": 94}},
      };

      const student = students[studentId];
      const errorMessage = document.getElementById('error-message');
      const resultsSection = document.getElementById('results-section');
      const resultsBody = document.getElementById('results-body');

      if (!student) {
        errorMessage.textContent = "Student ID not found.";
        resultsSection.style.display = "none";
        return;
      }

      if (student.pin !== studentPin) {
        errorMessage.textContent = "Incorrect PIN.";
        resultsSection.style.display = "none";
        return;
      }

      errorMessage.textContent = "";
      resultsSection.style.display = "block";

      // Clear previous results
      resultsBody.innerHTML = "";
      for (const subject in student.results) {
        const row = document.createElement('tr');
        const subjectCell = document.createElement('td');
        subjectCell.textContent = subject;
        const scoreCell = document.createElement('td');
        scoreCell.textContent = student.results[subject];
        row.appendChild(subjectCell);
        row.appendChild(scoreCell);
        resultsBody.appendChild(row);
      }
    });

    // Print results button
    const printButton = document.getElementById('print-results');
    printButton.addEventListener('click', () => {
      const printContents = document.getElementById('results-section').innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      location.reload();
    });
  }

  // Finance form logic
  const financeForm = document.getElementById('finance-form');
  if (financeForm) {
    // Simple principal check (simulate login)
    const isPrincipal = confirm("Are you the Principal? Click OK for Yes, Cancel for No.");
    if (!isPrincipal) {
      financeForm.style.display = "none";
      document.getElementById('finance-error').textContent = "Only the Principal can edit financial records.";
    } else {
      financeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const studentName = document.getElementById('student-name').value.trim();
        const amountPaid = document.getElementById('amount-paid').value.trim();
        if (!studentName || !amountPaid) {
          alert("Please fill in all fields.");
          return;
        }
        const paymentBody = document.getElementById('payment-body');
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = studentName;
        const amountCell = document.createElement('td');
        amountCell.textContent = amountPaid;
        row.appendChild(nameCell);
        row.appendChild(amountCell);
        paymentBody.appendChild(row);
        financeForm.reset();
      });
    }
  }
});
