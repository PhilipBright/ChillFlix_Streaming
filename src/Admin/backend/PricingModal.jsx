// import React, { useState } from 'react';
// import axios from 'axios';

// const AddPricingPlanForm = () => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [feature1, setFeature1] = useState('');
//   const [feature2, setFeature2] = useState('');
//   const [feature3, setFeature3] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newPricingPlan = {
//       name,
//       price,
//       features: [feature1, feature2, feature3],
//     };

//     try {
//       const response = await axios.post('/api/pricing', newPricingPlan);
//       console.log(response.data); // Handle success response
//       // Reset form fields
//       setName('');
//       setPrice('');
//       setFeature1('');
//       setFeature2('');
//       setFeature3('');
//     } catch (error) {
//       console.error(error); // Handle error response
//     }
//   };

//   return (
//     <div>
//       <h2>Add Pricing Plan</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
//         </div>
//         <div>
//           <label>Feature 1:</label>
//           <input type="text" value={feature1} onChange={(e) => setFeature1(e.target.value)} />
//         </div>
//         <div>
//           <label>Feature 2:</label>
//           <input type="text" value={feature2} onChange={(e) => setFeature2(e.target.value)} />
//         </div>
//         <div>
//           <label>Feature 3:</label>
//           <input type="text" value={feature3} onChange={(e) => setFeature3(e.target.value)} />
//         </div>
//         <button type="submit">Add Plan</button>
//       </form>
//     </div>
//   );
// };

// export default AddPricingPlanForm;
