// export default function Cat(props) {
//   return (
//     <div>
//       <h4>{props.name}</h4>
//       <img src={props.image} alt="immagine gatto" />
//       {props.children}
//     </div>
//   );
// }
export default function Cat({ name, image, children }) {
  return (
    <div>
      <h4>{name}</h4>
      <img src={image} alt="immagine gatto" />
      {children}
    </div>
  );
}
