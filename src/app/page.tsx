import Navbar from "./components/Navbar";
import Signup from './components/Signup';
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Signup />
     </div>
  );
}
// "use client";

// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import React, { useState } from 'react';

// const Home = () => {
//   const router = useRouter();
//   const [inputValue, setInputValue] = useState('');
//   const [password, setPassword] = useState('');
//   const [inputErrorMessage, setInputErrorMessage] = useState('');
//   const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

//   const handleInputChange = (e: any) => {
//     const value = e.target.value;
//     setInputValue(value);

//     if (value.length > 0 && value.length < 7) {
//       setInputErrorMessage('Input must be at least 7 characters');
//     } else {
//       setInputErrorMessage('');
//     }
//   };

//   const handlePasswordChange = (e: any) => {
//     const value = e.target.value;
//     setPassword(value);

//     if (value.length > 0 && value.length < 12) {
//       setPasswordErrorMessage('Password must be at least 12 characters');
//     } else {
//       setPasswordErrorMessage('');
//     }
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     if (password.length < 12) {
//       setPasswordErrorMessage('Password must be at least 12 characters');
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-full md:w-1/2 relative flex items-center justify-center">
//         <Image
//           src="/one.png"
//           alt="background"
//           className="image1"
//           layout="fill"
//         />
//         <div className="absolute top-0 left-0 w-full flex justify-center mt-4">
//           <Image
//             src="/four.png"
//             alt="navbar"
//             width={200}
//             height={50}
//           />
//         </div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <Image
//             src="/two.svg"
//             alt="overlay"
//             className="overlayImage"
//             layout="intrinsic"
//             width={427.62}
//             height={327}
//           />
//           <h1 className="textt1">
//             Royalty collections,<br /> simplified. It&apos;s next level!
//           </h1>
//           <p className="textt2 mt-2">
//             Revenue based invoice collection to <br /> make royalty collection as easy as...
//           </p>
//         </div>
//       </div>
//       <div className="h-full md:w-1/2 flex items-center ml-20">
//         <div className="box p-4 w-full max-w-sm">
//           <center>
//             <h2 className="text1 mb-2 text-lg">Get started with Franchain</h2>
//             <p className="text2 mb-3 text-gray-700 text-sm">Create an account in 5 minutes.</p>
//           </center>

//           <form action="" onSubmit={handleSubmit}>
//             <div className="container space-y-3">
//               <div>
//                 <label className="text-sm">First name</label><br />
//                 <input
//                   type="text"
//                   className="input text-sm"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="text-sm">Last name</label><br />
//                 <input type="text" className="input text-sm" required />
//               </div>
//               <div>
//                 <label className="text-sm">Business name and HQ location</label><br />
//                 <input type="text" className="input text-sm" required />
//               </div>
//               <div>
//                 <label className="text-sm">Work email</label><br />
//                 <input type="email" className="input text-sm" required />
//               </div>
//               <div>
//                 <label className="text-sm">Password</label><br />
//                 <input
//                   type="password"
//                   className="input text-sm"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   maxLength={12}
//                   required
//                 />
//                 {passwordErrorMessage && <p className="mt-1 text-red-500 text-xs">{passwordErrorMessage}</p>}
//               </div>
//               <div className="mt-3">
//                 <button className="button text-white w-fit py-2 text-sm" type="submit">Sign Up</button>
//               </div>
//             </div>
//           </form>
//           <p className="hi text-gray-700 mt-3 text-left text-xs">
//             By clicking “Start Application“, I agree to Mercury&apos;s{" "}
//             <span
//               className="underline cursor-pointer"
//               onClick={() => router.push('https://mercury.com/legal/terms')}
//             >
//               Terms of Use
//             </span>,{" "}
//             <span
//               className="underline cursor-pointer"
//               onClick={() => router.push('https://mercury.com/legal/privacy')}
//             >
//               Privacy Policy
//             </span> and to receive electronic communication about my accounts and services{" "}
//             <span
//               className="underline cursor-pointer"
//               onClick={() => router.push('https://mercury.com/legal/esign')}
//             >
//               Mercury&apos;s Electronic Communications Agreement
//             </span>, and acknowledge receipt of{" "}
//             <span
//               className="underline cursor-pointer"
//               onClick={() => router.push('https://mercury.com/legal/patriot-act')}
//             >
//               Mercury&apos;s USA PATRIOT Act disclosure
//             </span>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// // "use client";

// // import { useRouter } from 'next/navigation';
// // import Image from 'next/image';
// // import React, { useState } from 'react';

// // const Home = () => {
// //   const router = useRouter();
// //   const [inputValue, setInputValue] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [inputErrorMessage, setInputErrorMessage] = useState('');
// //   const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

// //   const handleInputChange = (e: any) => {
// //     const value = e.target.value;
// //     setInputValue(value);

// //     if (value.length > 0 && value.length < 7) {
// //       setInputErrorMessage('Input must be at least 7 characters');
// //     } else {
// //       setInputErrorMessage('');
// //     }
// //   };

// //   const handlePasswordChange = (e: any) => {
// //     const value = e.target.value;
// //     setPassword(value);

// //     if (value.length > 0 && value.length < 12) {
// //       setPasswordErrorMessage('Password must be at least 12 characters');
// //     } else {
// //       setPasswordErrorMessage('');
// //     }
// //   };

// //   const handleSubmit = (e: any) => {
// //     e.preventDefault();
// //     if (password.length < 12) {
// //       setPasswordErrorMessage('Password must be at least 12 characters');
// //     }
// //   };

// //   return (
// //     <div className="flex h-screen">
    
// //       <div className="w-full md:w-1/2 relative flex items-center justify-center ">
// //         <Image
// //           src="/one.png"
// //           alt="background"
// //           className="image1"
// //           layout="fill"
// //         />
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
// //           <Image
// //             src="/two.svg"
// //             alt="overlay"
// //             className="overlayImage"
// //             layout="intrinsic"
// //             width={427.62}
// //             height={327}
// //           />
// //           <h1 className="textt1">
// //             Royalty collections,<br /> simplified. It&apos;s next level!
// //           </h1>
// //           <p className="textt2 mt-2">
// //             Revenue based invoice collection to <br /> make royalty collection as easy as...
// //           </p>
// //         </div>
// //       </div>
// //       <div className=" h-full md:w-1/2 flex items-center ml-20">
// //         <div className="box p-4 w-full max-w-sm">
// //           <center>
// //             <h2 className="text1 mb-2 text-lg">Get started with Franchain</h2>
// //             <p className="text2 mb-3 text-gray-700 text-sm">Create an account in 5 minutes.</p>
// //           </center>

// //           <form action="" onSubmit={handleSubmit}>
// //             <div className="container space-y-3">
// //               <div>
// //                 <label className="text-sm">First name</label><br />
// //                 <input
// //                   type="text"
// //                   className="input "
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label className="text-sm">Last name</label><br />
// //                 <input type="text" className="input " required />
// //               </div>
// //               <div>
// //                 <label className="text-sm">Business name and HQ location</label><br />
// //                 <input type="text" className="input " required />
// //               </div>
// //               <div>
// //                 <label className="text-sm">Work email</label><br />
// //                 <input type="email" className="input " required />
// //               </div>
// //               <div>
// //                 <label className="text-sm">Password</label><br />
// //                 <input
// //                   type="password"
// //                   className="input "
// //                   value={password}
// //                   onChange={handlePasswordChange}
// //                   maxLength={12}
// //                   required
// //                 />
// //                 <p className='mt-1 text-red-500 text-xs'>Password must be at least 12 characters</p>
// //               </div>
// //               <div className="mt-3">
// //                 <button className="button text-white w-fit py-2 text-sm" type="submit">Sign Up</button>
// //               </div>
// //             </div>
// //           </form>
// //           <p className="hi text-gray-700 mt-3 text-left ">
// //             By clicking “Start Application“, I agree to Mercury&apos;s{" "}
// //             <span
// //               className="underline cursor-pointer"
// //               onClick={() => router.push('https://mercury.com/legal/terms')}
// //             >
// //               Terms of Use
// //             </span>,{" "}
// //             <span
// //               className="underline cursor-pointer"
// //               onClick={() => router.push('https://mercury.com/legal/privacy')}
// //             >
// //               Privacy Policy
// //             </span> and to receive electronic communication about my accounts and services{" "}
// //             <span
// //               className="underline cursor-pointer"
// //               onClick={() => router.push('https://mercury.com/legal/esign')}
// //             >
// //               Mercury&apos;s Electronic Communications Agreement
// //             </span>, and acknowledge receipt of{" "}
// //             <span
// //               className="underline cursor-pointer"
// //               onClick={() => router.push('https://mercury.com/legal/patriot-act')}
// //             >
// //               Mercury&apos;s USA PATRIOT Act disclosure
// //             </span>.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
