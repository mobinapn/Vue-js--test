export function usePersianPrice() {
    const toPersianDigits = (num) => {
      return num.toString().replace(/\d/g, d =>
        '۰۱۲۳۴۵۶۷۸۹'[d]
      );
    };
  
    const formatPrice = (price) => {
      if (price == null) return '';
      const withCommas = Number(price).toLocaleString('fa-IR');
      return toPersianDigits(withCommas) + ' تومان';
    };
  
    return {
      formatPrice ,
      toPersianDigits
    };
  }