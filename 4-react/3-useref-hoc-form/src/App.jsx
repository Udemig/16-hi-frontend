import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./ref-comonents/Input";
import Scroll from "./ref-comonents/Scroll";
import Counter from "./ref-comonents/Counter";
import Timer from "./ref-comonents/Timer";
import Card from "./wrapper-components/Card";
import Form from "./wrapper-components/Form";
import { KullaniciListesiYuklenmeli, UrunListesiYuklenmeli } from "./hoc-components/Example";

function App() {
  return (
    <div className="bg-dark min-vh-100 text-light p-5 d-flex flex-column gap-5">
      <KullaniciListesiYuklenmeli yukleniyorMu={true} hata={null} />

      <UrunListesiYuklenmeli yukleniyorMu={false} hata={"İnternet Bağlantısı Zayıf"} />

      <Form />

      <div>
        <h1 className="mb-4">Örnek-5 Wrapper Component</h1>

        <div className="d-flex flex-column gap-4">
          <Card>
            <h1>Ayakkabı</h1>
            <p>3500₺</p>
          </Card>

          <Card>
            <img
              src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dea8ca83-af45-429a-9cb6-3a77bf1fe579/AIR+FORCE+1+07%27+TECH+ESS.png"
              height={150}
              className="object-fit-contain"
            />
            <button>Satın Al</button>
          </Card>
        </div>
      </div>

      <Timer />
      <Counter />
      <Input />
      <Scroll />
    </div>
  );
}

export default App;
