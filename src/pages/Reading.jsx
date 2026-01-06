import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { PROFILE_IMAGES } from "../assets/profiles";
import "./Reading.css";

const sections = [
  {
    books: [
      {
        title: "Deep Work",
        author: "Cal Newport",
        desc: "Undistracted focus in a distracted world.",
        cover: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
      },
      {
        title: "The One Thing",
        author: "Gary Keller",
        desc: "Extreme prioritization.",
        cover: "https://covers.openlibrary.org/b/isbn/9781885167774-L.jpg",
      },
      {
        title: "Essentialism",
        author: "Greg McKeown",
        desc: "Doing less but better.",
        cover: "https://covers.openlibrary.org/b/isbn/9780804137386-L.jpg",
      },
      {
        title: "Make Time",
        author: "Jake Knapp",
        desc: "Designing time intentionally.",
        cover: "https://covers.openlibrary.org/b/isbn/9780525572428-L.jpg",
      },
    ],
  },
  {
    books: [
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        desc: "How humans actually think.",
        cover: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
      },
      {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        desc: "Behavior over intelligence.",
        cover: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
      },
      {
        title: "Meditations",
        author: "Marcus Aurelius",
        desc: "Timeless clarity & control.",
        cover: "https://covers.openlibrary.org/b/isbn/9780140449334-L.jpg",
      },
      {
        title: "Ikigai",
        author: "Héctor García",
        desc: "Purpose-driven life.",
        cover: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg",
      },
    ],
  },
  {
    books: [
      {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        desc: "Journey to mastery in software.",
        cover: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        desc: "Readable, maintainable code.",
        cover: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
      },
      {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        desc: "Reliable, scalable systems.",
        cover: "https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg",
      },
      {
        title: "Show Your Work",
        author: "Austin Kleon",
        desc: "Perfect for portfolio builders.",
        cover: "https://covers.openlibrary.org/b/isbn/9780761178972-L.jpg",
      },
    ],
  },
  {
    books: [
      {
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam",
        desc: "An autobiography of inspiration.",
        cover: "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg",
      },
      {
        title: "You Can Win",
        author: "Shiv Khera",
        desc: "Success through self-belief.",
        cover: "https://i.pinimg.com/736x/9f/ad/82/9fad8214574d18eaf2286c3e27c3ea28.jpg",
      },
      {
        title: "Chanakya Neeti",
        author: "Chanakya",
        desc: "Ancient wisdom for life.",
        cover: "https://i.pinimg.com/736x/34/c1/3f/34c13f58163eaaa44046054669bc899c.jpg",
      },
    ],
  },
];

export default function Reading() {
  const location = useLocation();

  const activeProfile =
    location.state?.profile ||
    sessionStorage.getItem("activeProfile") ||
    "developer";

  const profileImage = PROFILE_IMAGES[activeProfile];

  return (
    <>
      <Navbar
        profileImage={profileImage}
        activeProfile={activeProfile}
      />

      <div className="reading-page">
        <div className="reading-title">
          <h1>Books That Shaped My Journey</h1>
        </div>

        {sections.map((section, i) => (
          <div className="reading-row" key={i}>
            <div className="reading-grid">
              {section.books.map((book, index) => (
                <div className="reading-card" key={index}>
                  <div className="reading-cover">
                    <img src={book.cover} alt={book.title} />
                  </div>
                  <div className="reading-info">
                    <h3>{book.title}</h3>
                    <span>{book.author}</span>
                    <p>{book.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
