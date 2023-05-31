import { useEffect, useRef, useState } from "react";

import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import Message from "./Message";
import { db } from "../firebase";

const ChatBox = () => {
  const [messages, setMassages] = useState([]);
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({
          ...doc.data(),
          createdAt: doc.data().createdAt.toDate(),
          id: doc.id,
        });
      });
      setMassages(messages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div>
      <div className="pb-44 pt-20 containerWrap">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
    </div>
  );
};

export default ChatBox;
