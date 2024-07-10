import React from 'react'

const dateTo = {
    toDateFormat : (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID',{   day: 'numeric',
        month: 'long',
        year: 'numeric'}); 
      },
}
export const {toDateFormat} = dateTo
export default dateTo