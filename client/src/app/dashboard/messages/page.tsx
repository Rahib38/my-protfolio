/* eslint-disable @typescript-eslint/no-explicit-any */
import MessageCard from "@/app/components/message/MessageCard";

const messagePage = async() => {
    const res = await fetch("http://localhost:5001/api/message", {
        cache: "no-store",
      });
      const messages = await res.json();
  return (
    <div>
            <h2>All Blogs</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10" >
       
        {messages?.data?.map((message:any) => (
          <MessageCard key={message.id} message={message}/>
        ))}
      </div>
    </div>
  )
}

export default messagePage
