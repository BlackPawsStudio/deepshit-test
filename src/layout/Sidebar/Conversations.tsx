const conversations = [
  {
    id: 1,
    name: "AI Chat Tool Ethics",
  },
];

export const Conversations = () => {
  return (
    <div className="flex flex-col gap-2 py-5">
      <p className="text-sm tracking-wide">
        CONVERSATIONS ({conversations.length})
      </p>
      <div className="flex flex-col gap-3 pl-3 mt-5">
        {conversations.map((conversation) => (
          <div key={conversation.id} className="text-sm tracking-wide">
            <p>{conversation.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
