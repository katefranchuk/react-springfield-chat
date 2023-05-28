import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = useAuth();

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();

    if (value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        // createdAt: serverTimestamp(),
        createdAt: new Date(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }

    setValue("");
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input
          value={value}
          onChange={handleInput}
          type="text"
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
        />
        <button
          type="submit"
          className="w-auto px-5 bg-gray-500 text-sm text-white rounded-r-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
