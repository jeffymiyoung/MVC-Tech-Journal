// helper format logic
module.exports = {
    // Date formatting export
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
            ).getFullYear()}`;
    },
    // plural words
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    },
    // urls
    format_url: url => {
        return url
          .replace('http://', '')
          .replace('https://', '')
          .replace('www.', '')
          .split('/')[0]
          .split('?')[0];
    },
}