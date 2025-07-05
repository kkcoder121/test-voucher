function generateVoucher() {
  document.getElementById('vGuest').innerText = document.getElementById('guestName').value;
  document.getElementById('vHotel').innerText = document.getElementById('hotelName').value;
  document.getElementById('vAddress').innerText = document.getElementById('address').value;
  document.getElementById('vBookingId').innerText = document.getElementById('bookingId').value;
  document.getElementById('vRefNo').innerText = document.getElementById('refNo').value;
  document.getElementById('vCheckin').innerText = document.getElementById('checkin').value;
  document.getElementById('vCheckout').innerText = document.getElementById('checkout').value;
  document.getElementById('vRoomType').innerText = document.getElementById('roomType').value;
  document.getElementById('vRooms').innerText = document.getElementById('rooms').value;
  document.getElementById('vAdults').innerText = document.getElementById('adults').value;
  document.getElementById('vChildren').innerText = document.getElementById('children').value;
  html2pdf().from(document.getElementById("voucher")).save("Hotel_Voucher.pdf");
}