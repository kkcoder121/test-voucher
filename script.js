function generateVoucher() {
  document.getElementById('vGuest').innerText = "Guest: " + document.getElementById('guestName').value;
  document.getElementById('vHotel').innerText = "Hotel: " + document.getElementById('hotelName').value;
  document.getElementById('vAddress').innerText = "Address: " + document.getElementById('address').value;
  document.getElementById('vCheck').innerText = "Check-in: " + document.getElementById('checkin').value + " | Check-out: " + document.getElementById('checkout').value;
  document.getElementById('vBooking').innerText = "Booking ID: " + document.getElementById('bookingId').value + ", Ref: " + document.getElementById('refNo').value;
  document.getElementById('vRoom').innerText = "Room Type: " + document.getElementById('roomType').value;
  document.getElementById('vOccupancy').innerText = "Rooms: " + document.getElementById('rooms').value + ", Adults: " + document.getElementById('adults').value + ", Children: " + document.getElementById('children').value;
  html2pdf().from(document.getElementById("voucher")).save("Hotel_Voucher.pdf");
}
