import React from "react";

const CardBox = ({ title, description, date }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <h2>{date}</h2>
    </div>
  );
};
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px 0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default CardBox;

// import React from 'react';

// const Card = ({ title, description, date }) => {
//   return (
//     <div style={styles.card}>
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <small>{date}</small>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '16px',
//     margin: '8px 0',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default Card;
