export function formatDateTimeToIST(isoDate:any) {
   
    const date = new Date(isoDate);
    const offset = 5.5 * 60 * 60 * 1000; 
    const istDate = new Date(date.getTime() + offset);
    const day = String(istDate.getUTCDate()).padStart(2, '0');
    const month = String(istDate.getUTCMonth() + 1).padStart(2, '0'); 
    const year = istDate.getUTCFullYear();
  
    const hours = String(istDate.getUTCHours()).padStart(2, '0');
    const minutes = String(istDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(istDate.getUTCSeconds()).padStart(2, '0');
  
  
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  
//   // Example usage:
//   const isoDate = "2024-07-25T06:08:46.927Z";
//   const formattedDateTime = formatDateTimeToIST(isoDate);
//   console.log(formattedDateTime); // Output: 25/07/2024 11:38:46
  