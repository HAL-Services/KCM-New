import '../../styles/Loader.styles.scss'
const Loader = () => {
  return (
    <div className="loader-container">
      <section id="global">
        <div id="top" className="mask">
          <div className="plane"></div>
        </div>
        <div id="middle" className="mask">
          <div className="plane"></div>
        </div>
        <div id="bottom" className="mask">
          <div className="plane"></div>
        </div>
      </section>
    </div>
  );
};

export default Loader;