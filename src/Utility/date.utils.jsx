const daysOfWeek = [
  'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
];

const dateTo = {
  toDateFormat: (dateString) => {
    const date = new Date(dateString);
    const dayName = daysOfWeek[date.getDay()];
    const formattedDate = date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    return `${dayName}, ${formattedDate}`;
  }
};

export const { toDateFormat } = dateTo;
export default dateTo;
