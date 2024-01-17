import { Container, Image } from "react-bootstrap"

function App() {

  return (
    <Container fluid="sm" className="text-center mt-5">
      <Image fluid src="/logo.png" alt="Firmenlogo der Firma Brand GmbH" style={{ maxWidth: "100%" }} />
      <h1>Vielen Dank für Ihren Besuch.</h1>
      <p className="fs-3">Hier entsteht in kürze eine neue Internetpräsenz.</ p>
      <h2>Impressum</h2>
      <p>
        Brand GmbH <br />
        Geschäftsleitung: Nicole Brand <br />
        Im Siegen 1 <br />
        34292 Ahnatal <br />
        Telefon: 05609 - 8078 - 60 <br />
        Fax: 05609 - 80786 - 29 <br />
        E-Mail: info[AT]container-brand[PUNKT]de
      </p>
      <p>
        Unsere Geschäftzeiten sind: <br />
        Montags - Freitags von 07:00 Uhr - 17:00 Uhr <br />
        UStIdent.Nr.: DE 20 49 71 77 0
      </p>
    </Container >
  )
}

export default App
