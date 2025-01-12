import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import Wrapper from "../../hoc";
import { slideIn } from "../../utils/motion";
import { styles } from "../../styles";
import { useRef, useState } from "react";
import EarthCanvas from "../../components/canvas/Earth";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Min Paing",
          from_email: form.email,
          to_email: "minmyatpaing64@gmail.com",
          message: `Email: ${form.email} \n\nMessage: ${form.message}`,
        },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(() => {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
        alert("Thank you. I will be in touch with you as early as possible.");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);

        alert("Something went wrong!");
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Left Section - Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] min-w-[300px] bg-tertiary p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let’s Build Something Amazing</p>
        <p className={styles.sectionHeadText}>Contact</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-3"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Please enter your name."
              className="bg-black outline-none py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Please enter your email."
              className="bg-black outline-none py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Please enter any queries you have."
              className="bg-black outline-none py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-secondary" : "bg-black"
            } py-3 px-8 rounded-xl w-fit outline-none text-white shadow-md font-bold shadow-black`}
          >
            {loading ? "...Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Right Section - EarthCanvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 h-[350px] md:h-[550px] xl:h-auto"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Wrapper(Contact, "contact");
