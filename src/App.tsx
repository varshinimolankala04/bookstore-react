import { useState } from 'react';
import "./App.css";
function BookCard(props) {
  return (
    <div className="book-card">
      <h3 className="book-title">{props.title}</h3>
      <p className="book-price">{props.price}</p>
    </div>
  );
}
function EventCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <p>{props.description}</p>
    </div>
  );
}

function HomePage() {
  const books = [
    { title: 'The Silent Patient', price: '₹399' },
    { title: 'Atomic Habits', price: '₹349' },
    { title: 'The Alchemist', price: '₹299' },
  ];

  return (
    <div className="books-wrapper">
      {books.map(function (book, index) {
        return <BookCard key={index} title={book.title} price={book.price} />;
      })}
    </div>
  );
}

function BooksPage() {
  const [searchText, setSearchText] = useState('');

  const books = [
    { title: 'The Silent Patient', price: '₹399' },
    { title: 'Atomic Habits', price: '₹349' },
    { title: 'The Alchemist', price: '₹299' },
    { title: 'Ikigai', price: '₹349' },
    { title: 'The Midnight Library', price: '₹399' },
    { title: 'Sapiens', price: '₹499' },
  ];

  const filteredBooks = books.filter(function (book) {
    return book.title.includes(searchText);
  });

  return (
    <div>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Type something...."
      />
      {filteredBooks.length < 1 && 'no books found'}
      <div className="books-wrapper">
        {filteredBooks.map(function (book, index) {
          return <BookCard key={index} title={book.title} price={book.price} />;
        })}
      </div>
    </div>
  );
}
function EventsPage() {
  const events = [
    {
      title: 'Monthly Book Club',
      date: 'Sept 5, 2026',
      description: "Discussing this month's pick.",
    },
    {
      title: 'Author Meet: Local Voices',
      date: 'Sept 12, 2026',
      description: 'An evening with regional authors.',
    },
    {
      title: 'Open Mic Poetry Night',
      date: 'Sept 19, 2026',
      description: 'Share your poetry or just listen.',
    },
  ];
  return (
    <div className="events-wrapper">
      {events.map(function (event, index) {
        return (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        );
      })}
    </div>
  );
}

function ContactsPage() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  function handleSubmit() {
    if (Name === '') {
      setMessage('please enter name');
    } else if (!Email.includes('@')) {
      setMessage('please enter valid email');
    } else {
      setMessage('your message sent');
    }
  }
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something..."
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Type something..."
      />

      <button onClick={handleSubmit}>Submit</button>
      <p>{Message}</p>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <div className="navbar">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('books')}>Books</button>
        <button onClick={() => setPage('events')}>Events</button>
        <button onClick={() => setPage('contacts')}>Contacts</button>
      </div>
      {page === 'home' && <HomePage />}
      {page === 'books' && <BooksPage />}
      {page === 'events' && <EventsPage />}
      {page === 'contacts' && <ContactsPage />}
    </div>
  );
}
        
