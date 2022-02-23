import "./styles.css";

const History = ({ data, backgroundColor }) => {
  return (
    <>
      {data.length > 0 && (
        <section>
          <h3>Histórico de Cores Geradas</h3>

          <ul>
            {data.map((rgb) => (
              <li key={rgb.join()}>
                <div
                  className="small-preview"
                  style={{ backgroundColor: backgroundColor(...rgb) }}
                ></div>
                {rgb.join(" . ")}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default History;
