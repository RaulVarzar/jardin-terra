const StartPage = () => {
  return (
    <div className="grid w-full h-full border-2 place-content-center border-accent">
      <div class="mx-auto w-full max-w-6xl text-neutral-content ">
        <h1 class="text-4xl font-medium">Contact us</h1>
        <p class="mt-3">Email us at help@domain.com or message us here:</p>

        <form action="" class="mt-10">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="relative z-0">
              <input
                type="text"
                name="name"
                class="peer block w-full appearance-none border-0 border-b border-neutral-content bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                Your name
              </label>
            </div>
            <div class="relative z-0">
              <input
                type="text"
                name="email"
                class="peer block w-full appearance-none border-0 border-b border-neutral-content bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                Your email
              </label>
            </div>
            <div class="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                class="peer block w-full appearance-none border-0 border-b border-neutral-content bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="mt-5 rounded-md bg-black px-10 py-2 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartPage;
