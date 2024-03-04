import { motion } from "framer-motion";
const CardAnimation1 = () => {
  const articles = [
    {
      id: 1,
      title: "Great Times",
      desction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni quasi fugit, quam at repellendus architecto similique corporis nihil dolorem itaque, provident nisi saepe eos voluptas in? Veniam laudantium, pariatur optio harum quisquam ipsam facere enim explicabo itaque quod voluptates quibusdam unde eum deleniti et? Soluta error delectus ipsum illum!",
    },
    {
      id: 2,
      title: "Great Times",
      desction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni quasi fugit, quam at repellendus architecto similique corporis nihil dolorem itaque, provident nisi saepe eos voluptas in? Veniam laudantium, pariatur optio harum quisquam ipsam facere enim explicabo itaque quod voluptates quibusdam unde eum deleniti et? Soluta error delectus ipsum illum!",
    },
    {
      id: 3,
      title: "Great Times",
      desction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni quasi fugit, quam at repellendus architecto similique corporis nihil dolorem itaque, provident nisi saepe eos voluptas in? Veniam laudantium, pariatur optio harum quisquam ipsam facere enim explicabo itaque quod voluptates quibusdam unde eum deleniti et? Soluta error delectus ipsum illum!",
    },
    {
      id: 4,
      title: "Great Times",
      desction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni quasi fugit, quam at repellendus architecto similique corporis nihil dolorem itaque, provident nisi saepe eos voluptas in? Veniam laudantium, pariatur optio harum quisquam ipsam facere enim explicabo itaque quod voluptates quibusdam unde eum deleniti et? Soluta error delectus ipsum illum!",
    },
    {
      id: 5,
      title: "Great Times",
      desction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni quasi fugit, quam at repellendus architecto similique corporis nihil dolorem itaque, provident nisi saepe eos voluptas in? Veniam laudantium, pariatur optio harum quisquam ipsam facere enim explicabo itaque quod voluptates quibusdam unde eum deleniti et? Soluta error delectus ipsum illum!",
    },
    {
      id: 6,
      title: "Great Times",
      desction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni quasi fugit, quam at repellendus architecto similique corporis nihil dolorem itaque, provident nisi saepe eos voluptas in? Veniam laudantium, pariatur optio harum quisquam ipsam facere enim explicabo itaque quod voluptates quibusdam unde eum deleniti et? Soluta error delectus ipsum illum!",
    },
  ];
  return (
    <>
      <div className="bg-[#e2edfc] h-[calc(100vh-2rem)] py-4 px-4 rounded-2xl flex flex-wrap gap-10 justify-center">
        {articles.map((item, index) => {
          return (
            <>
              <motion.div
                key={item.id}
                className="w-[30%] px-4 py-4 bg-white rounded-xl text-gray-800 shadow-xl"
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                <h1>{item.title}</h1>
                <p>{item.desction}</p>
              </motion.div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CardAnimation1;
