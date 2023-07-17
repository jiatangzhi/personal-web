<template>
  <p class="relative bottom-[68px] lg:bottom-[98px]" id="contact"></p>
  <div class="py-6 px-8 lg:px-20 lg:py-8 xl:px-28 xl:py-10 2xl:px-[410px] 2xl:py-12 relative pb-10 bg-white">
    <p class="text-3xl text-purple-500 font-bold text-center lg:text-4xl lg:pb-8 xl:text-5xl 2xl:text-6xl xl:pb-12">Let's Work Together</p>
    <div class="lg:flex lg:gap-x-24">
      <div class="lg:w-1/2 xl:text-xl">

        <p class="text-xl text-purple-500 mt-6 font-semibold 2xl:text-3xl">Contact Information</p>
        <p class="text-black mt-1 lg:text-lg xl:text-xl">Get in touch with me via the contact information below if you're interested in connecting, collaborating, or discussing potential opportunities:</p>

        <div class="flex gap-x-2 flex-wrap justify-start items-center mt-4 2xl:mt-16">
          <img src="/contact/email.png" alt="Email" class="w-7">
          <p class="hover:font-semibold text-purple-500 hover:text-pink-700 transition-all hover:cursor-pointer">jiaxintangzhi@gmail.com</p>
        </div>
        <a href="https://www.linkedin.com/in/jiatangzhi/" target="_blank" rel="noopener noreferrer">
          <div class="flex gap-x-2 flex-wrap justify-start items-center mt-4">
            <img src="/contact/linkedin.png" alt="Linkedin" class="w-7">
            <p class="hover:font-semibold text-purple-500 hover:text-pink-700 transition-all">Jia Xin Tang Zhi</p>
          </div>
        </a>
        <a href="https://github.com/jiatangzhi" target="_blank" rel="noopener noreferrer" class="mb-4 lg:mb-0">
          <div class="flex gap-x-2 flex-wrap justify-start items-center mt-4">
            <img src="/contact/github-sign.png" alt="Github" class="w-7">
            <p class="hover:font-semibold text-purple-500 hover:text-pink-700 transition-all">jiatangzhi</p>
          </div>
        </a>
      
        <button class="mt-4 2xl:mt-16 btn bg-pink-500 hover:bg-pink-600 border-none rounded-none w-full mb-2 lg:text-lg normal-case" @click="downloadResume">Download my resume</button>
        <div class="divider lg:hidden"></div>
      </div>

      <div class="lg:w-1/2">
        <div class="form-control w-full mb-2 z-20">
          <label class="label">
            <span class="label-text lg:text-lg">Name</span>
          </label>
          <input type="text" v-model="from_name" name="name" placeholder="John Doe" class="bg-white input input-bordered w-full mb-2" />
        </div>
        <div class="form-control w-full mb-2">
          <label class="label">
            <span class="label-text lg:text-lg">Email</span>
          </label>
          <input type="text" placeholder="john@gmail.com" v-model="from_email" name="email" class="bg-white input input-bordered w-full mb-2" />
        </div>
        <div class="form-control w-full mb-2">
          <label class="label">
            <span class="label-text lg:text-lg">Subject</span>
          </label>
          <input type="text" v-model="subject" name="subject" class="bg-white input input-bordered w-full mb-2" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text lg:text-lg">Message</span>
          </label>
          <textarea v-model="message" name="message" class="bg-white textarea textarea-bordered h-24" ></textarea>
        </div>
        <button class="btn btn-primary mt-4 rounded-none w-full mb-2 lg:text-lg normal-case" @click="sendEmail">Send</button>
      </div>
    </div>
    <img src="/contact/star.svg" alt="star" class="absolute top-0 -right-20 hidden lg:block w-64 -z-0 opacity-30 2xl:w-96 2xl:-right-32">
    <img src="/contact/dots.svg" alt="Dot" class="absolute bottom-0 left-0 opacity-30 hidden lg:block w-80 2xl:w-[400px]">
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
export default{
  data(){
    return{
      from_name: '',
      from_email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    sendEmail(){
      try {
        if(this.from_name === '' || this.from_email === '' || this.subject === '' || this.message === '') {
          this.createAlert("All fields are required", "danger", 2000);
          return;
        }

        emailjs.send("service_59goj67","template_oj9r48v",{
          from_email: this.from_email,
          subject: this.subject,
          message: this.message,
          from_name: this.from_name,
        }, "fekYccY61jeAhd6vT");

        this.createAlert("Email sent successfully", "success", 2000);

      } catch(error) {
        this.createAlert(`Something went wrong ${error}`, "danger", 5000);
        console.log({error})
      }

      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
    downloadResume(){
      const fileURL = 'contact/Jia Xin Tang zhi Resume.pdf';

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = fileURL;
      link.target = '_blank';
      link.download = 'Jia Xin Tang zhi Resume.pdf';

      // Append the link element to the document body
      document.body.appendChild(link);

      // Trigger the click event on the link element
      link.click();

      // Clean up by removing the link element
      document.body.removeChild(link);
    },
    createAlert(message, type, timeout) {
      createToast(message, {
        position: "bottom-center",
        hideProgressBar: true,
        type: type,
        timeout: timeout,
        dismissible: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        closeOnClick: true,
        closeButton: true,
        icon: true,
        rtl: false,
      });
    },
  }

}
</script>