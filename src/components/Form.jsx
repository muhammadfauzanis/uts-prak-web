const Form = () => {
  return (
    <form className="flex flex-col w-3/4 mx-auto gap-y-4 pb-12">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="Name"
        placeholder="Your name"
        className="p-2 border-2 rounded-md"
      />
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        name="Email"
        placeholder="Your Email"
        className="p-2 border-2 rounded-md"
      />
      <label htmlFor="role">Role</label>
      <select name="role" id="role" className="p-2 border-2 rounded-md">
        <option value="Designer">Designer</option>
        <option value="Front-End">Front-End</option>
        <option value="Human Resource">Human Resource</option>
        <option value="Back-End">Back-End</option>
        <option value="Manajer">Manajer</option>
      </select>
      <label htmlFor="message">Message</label>
      <input
        type="text"
        name="Message"
        placeholder="Your Message"
        className="p-2 border-2 rounded-md"
      />

      <label htmlFor="information">I choose to send information about:</label>
      <div className="flex items-center ml-4">
        <input
          type="checkbox"
          id="marketing"
          name="information1"
          value="Marketing"
          className="h-5 w-5 mr-3 "
        />
        <label htmlFor="marketing">Marketing</label>
      </div>

      <div className="flex items-center ml-4">
        <input
          type="checkbox"
          id="news-updates"
          name="information2"
          value="News & Updates"
          className="h-5 w-5 mr-3 "
        />
        <label htmlFor="news-updates">News & Updates</label>
      </div>

      <div className="flex items-center ml-4">
        <input
          type="checkbox"
          id="product-updates"
          name="information3"
          value="Product Updates"
          className="h-5 w-5 mr-3"
        />
        <label htmlFor="product-updates">Product Updates</label>
      </div>

      <div className="flex items-center ml-4 pb-2">
        <input
          type="checkbox"
          id="none"
          name="information4"
          value="None"
          className="h-5 w-5 mr-3"
        />
        <label htmlFor="none">None</label>
      </div>
      <button
        className="h-10 px-6 font-semibold rounded-sm bg-[#827e82] text-gray-300 sm:px-12 w-1/4 flex justify-center items-center"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
