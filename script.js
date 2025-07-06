function generateVoucher() {
  const get = id => document.getElementById(id).value;
  const set = (id, val) => document.getElementById(id).innerText = val;

  set('vGuest', get('guestName'));
  set('vBookingId', get('bookingId'));
  set('vRefNo', get('refNo'));
  set('vHotel', get('hotelName'));
  set('vAddress', get('address'));
  set('vCheckin', get('checkin'));
  set('vCheckout', get('checkout'));
  set('vRooms', get('rooms'));
  set('vAdults', get('adults'));
  set('vChildren', get('children'));
  set('vRoomType', get('roomType'));
  set('vBenefits', get('benefits'));

  html2pdf().from(document.getElementById('voucher')).save('Hotel_Voucher.pdf');
}