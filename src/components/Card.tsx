import { FocusCardsUnit } from "@/components/ui/focus-cards";

export function FocusCards() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/nature-1.jpg",
    },
    {
      title: "Valley of life",
      src: "/nature-2.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/nature-3.jpg",
    },
    {
      title: "Camping is for pros",
      src: "/campfire.jpg",
    },
    {
      title: "The road not taken",
      src: "/nature-5.jpg",
    },
    {
      title: "The First Rule",
      src: "/nature-6.jpg",
    },
  ];

  return (
    <>
      <h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-4">
        Some options
      </h1>
      <FocusCardsUnit cards={cards} />;
    </>
  );
}

export default FocusCards;
