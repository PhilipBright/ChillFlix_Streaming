import React from 'react';

const StreamExclusive = () => {
  return (
    <section className="px-5 pt-5 pb-20 relative w-full h-full bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-3xl text-white font-bold mb-2">ChillFlix has your favorite stories</h1>
          <p className="text-lg md:text-base text-white">An unprecedented collection of the world's most beloved movies and TV series.</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1nVl9d8GCfDhFzIu-G4H9DiEoCTJbfpH7" alt="grid/img" className="absolute  rounded-md" />
          </div>
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1Ko0laxDg7WAbg8MURgnDn18Xfbt_npz4" alt="grid/img" className="absolute  rounded-md" />
          </div>
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1KdxEsAaMz9MWbxsRlIwXM_qufH3vW3-C" alt="grid/img" className="absolute  rounded-md" />
          </div>
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1GG_-jlrHMkCv5ua0UkgPo5ryMsJDuSBb" alt="grid/img" className="absolute  rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-48">
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1KivzxUfsyGpBjtzC-r8LeAt8Q3essPvw" alt="grid/img" className="absolute  rounded-md" />
          </div>
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1m1LOLa29JER4o_qgRe-Uh7PE18hHTLJ-" alt="grid/img" className="absolute  rounded-md" />
          </div>
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1KlLNjH6qCH9a3vUz2xx6iboX78gd_Iac" alt="grid/img" className="absolute  rounded-md" />
          </div>
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1FU2tUlM-Lm_9GvGFaB4ubvuMRKSWSVhI" alt="grid/img" className="absolute  rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-48">
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1KjodMaJRBwE_fWiAap3ziR98KLkswtdi" alt="grid/img" className="absolute  rounded-md" />
          </div>
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1-_K_Ilf0hhenIYp5PUygrvVUPR8i8Red" alt="grid/img" className="absolute  rounded-md" />
          </div>
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1c5b87s40Ol_VJHykk4KGAYvVB_hzseU5" alt="grid/img" className="absolute  rounded-md" />
          </div>
          <div className="aspect-w-2 aspect-h-3 relative  rounded-md shadow-lg">
            <img src="https://drive.google.com/uc?id=1KqAs4Ike2s6GoBZw5z-6frFq7Dc1_OxF" alt="grid/img" className="absolute  rounded-md" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default StreamExclusive;


// import React from 'react';

// const Images = () => {
//   const images = [
//     'https://drive.google.com/uc?id=1nVl9d8GCfDhFzIu-G4H9DiEoCTJbfpH7',
//     'https://drive.google.com/uc?id=1Ko0laxDg7WAbg8MURgnDn18Xfbt_npz4',
//     'https://drive.google.com/uc?id=1KdxEsAaMz9MWbxsRlIwXM_qufH3vW3-C',
//     'https://drive.google.com/uc?id=1GG_-jlrHMkCv5ua0UkgPo5ryMsJDuSBb',
//     'https://drive.google.com/uc?id=1KivzxUfsyGpBjtzC-r8LeAt8Q3essPvw',
//     'https://drive.google.com/uc?id=1m1LOLa29JER4o_qgRe-Uh7PE18hHTLJ-',
//     'https://drive.google.com/uc?id=1KlLNjH6qCH9a3vUz2xx6iboX78gd_Iac',
//     'https://drive.google.com/uc?id=1FU2tUlM-Lm_9GvGFaB4ubvuMRKSWSVhI',
//     'https://drive.google.com/uc?id=1KjodMaJRBwE_fWiAap3ziR98KLkswtdi',
//     'https://drive.google.com/uc?id=1-_K_Ilf0hhenIYp5PUygrvVUPR8i8Red',
//     'https://drive.google.com/uc?id=1c5b87s40Ol_VJHykk4KGAYvVB_hzseU5',
//     'https://drive.google.com/uc?id=1KqAs4Ike2s6GoBZw5z-6frFq7Dc1_OxF',
//   ];

//   return (
//     <section className="px-5 pt-5 pb-20 relative">
//       <div className="container mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl md:text-3xl font-bold  mb-2">
//             Disney+ has your favorite stories
//           </h1>
//           <p className="text-lg md:text-base">
//             An unprecedented collection of the world's most beloved movies and TV series.
//           </p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {images.map((image, index) => (
//             <div key={index} className="relative pb-2/3 overflow-hidden rounded-md shadow-lg">
//               <img src={image} alt={`grid/img-${index}`} className="absolute inset-0 w-full h-full object-cover rounded-md" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Images;
