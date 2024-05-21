import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <h3 className="bg-pink-500 text-4xl md:text-6xl font-semibold py-2 px-4 rounded transition-all">
          Tuinue Wasichana
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            Providing more than just pads, we're delivering clean water and sanitation. Empowering girls for a brighter future in school and beyond.
        </p>
        <button className="bg-pink-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://moderndiplomacy.eu/wp-content/uploads/2019/09/african-women.jpg",
  },
  {
    id: 2,
    src: "https://www.fpri.org/wp-content/uploads/2022/04/adobestock-286487051-scaled.jpeg",
  },
  {
    id: 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBImeF8IAFEh27jzOiH0qdYa4MFJmS4Kyjh4cEA-ZqOg&s",
  },
  {
    id: 4,
    src: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/u/Tuungane2019_190513_1509.jpg?crop=0%2C385%2C7194%2C3956&wid=4000&hei=2200&scl=1.7985",
  },
  {
    id: 5,
    src: "https://static1.squarespace.com/static/5d2ca9761a47d8000176903e/t/5f760a5c7223bd33fa1ece4c/1601571437824/A%26C+%282%29.jpg?format=1500w",
  },
  {
    id: 6,
    src: "https://www.kenyanews.go.ke/wp-content/uploads/2021/07/HEALTH-1200x630.jpeg",
  },
  {
    id: 7,
    src: "https://www.afripadsfoundation.org/wp-content/uploads/2021/10/12138371-1513073239012995-3516683868920662492-o-1200x630.jpg",
  },
  {
    id: 8,
    src: "https://cmmb.org/wp-content/uploads/2020/08/Young-Girl-with-Clean-Water-Pouring-from-Faucet-into-Bucket-e1601575883760-678x678.jpg",
  },
  {
    id: 9,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXe7VZuD9fN0g9x-yz924SqIEgHSZ-6eH811NekFTk5J4M_x6uhk7UTJX6WTrUP-r0YdQ&usqp=CAU",
  },
  {
    id: 10,
    src: "https://www.unicef.org/malawi/sites/unicef.org.malawi/files/styles/hero_tablet/public/DSC_6850.jpg.webp?itok=R9Ng6PSk",
  },
  {
    id: 11,
    src: "https://theonefoundation.org.uk/wp-content/uploads/2019/04/Malawi_Image1-1024x682.png",
  },
  {
    id: 12,
    src: "https://fatherlandgazette.com/wp-content/uploads/2022/06/African-women.jpeg",
  },
  {
    id: 13,
    src: "https://www.womankind.org.uk/wp-content/uploads/2023/03/ERM_1779-compressed-3-scaled.jpg",
  },
  {
    id: 14,
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fungei-blog%2Fwhy-we-must-invest-in-girls-education-beyond-the-classroom-741d5cf19df9&psig=AOvVaw1nMXfVoTQkYCQa58EhfBKr&ust=1716408873851000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNikq7HHn4YDFQAAAAAdAAAAABAE",
  },
  {
    id: 15,
    src: "https://i.guim.co.uk/img/media/821c3dbf3181e8471072743ec07c3b88797ecf5e/0_248_7360_4417/master/7360.jpg?width=620&quality=85&auto=format&fit=max&s=b623abcea957d084df1f46a196ab1572",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/devex/image/fetch/https://lh6.googleusercontent.com/HtP9Lm0nws0B38i5qkyqZtwRSn8xkR8TJGkriaqiWv89mLavA-_M_V5X7iGYY93QB3JpOzrnUJ-HUWC9YaYUO1bDpoq_O8FYPj_nJFw-GC5pkMeDX418bK-4ORlbY09XVMqfIhq2",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Home;