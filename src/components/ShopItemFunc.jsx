import "../ShopItemFunc.css";

export default function ShopItemFunc({item}) {
  return (
    <>
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>Minimalistic coat in cotton-blend</h3>
        <div className="description">
          {item.description}
        </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.price}{item.currency}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </>
  );
}