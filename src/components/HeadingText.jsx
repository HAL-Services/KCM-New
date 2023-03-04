import "../styles/HeadingText.scss";
export default function HeadingText({ text1, text2, style }) {
  return (
    <h2 className={`about_title_${style}`}>
      {text1}
      <h3 className="experience">
        {text2}
        <span>{text2.toUpperCase()}</span>
      </h3>
    </h2>
  );
}
