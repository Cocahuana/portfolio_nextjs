const styles = "poner css";
const HomePage = () => (
    /* styles.content */
    <div className={styles}>
        {/* styles.author */}
      <span className={styles}>
        Made by{' '}
        <a href={'https://yannickwittwer.dev'} target="_blank" rel="noreferrer">
          yannickwittwer.dev
        </a>
      </span>
      <br></br>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <p>Paragraph</p>
    </div>
  );
  
  export default HomePage;