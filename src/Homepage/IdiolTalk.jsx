import "./idiolTalk.css";
const IdiolTalk = () => {
  return (
    <div className="zigzag-container">
      <div className="zigzag-item">
        <img src="/idiol/card-1.jpg" alt="Sri Ramakrishna" className="zigzag-image" />

        <div className="zigzag-content">
          <h2>As long as I live, so long do I learn.</h2>
          <p>
            Education is not just the learning of facts, but the cultivation of character, discipline, and a deep connection with truth. Inspired by the ideals of Sri Ramakrishna, we believe that
            every student carries within them a spark of divine potential.
          </p>
          <p>
            At <strong>Rajgram Ramakrishna Ashrama Vidyamandir</strong>, we strive to create an environment where students are not only taught to excel in academics, but also encouraged to develop
            strength of character, compassion for others, and faith in themselves.
          </p>
          <p>
            Just as Sri Ramakrishna taught through simplicity, purity, and love, we aim to guide young minds to become not only successful individuals, but responsible citizens and spiritually
            awakened human beings.
          </p>
          <p>Let each student shine like a lamp — lighting the path for themselves and for the world.</p>
        </div>
      </div>

      <div className="zigzag-item reverse">
        <img src="/idiol/card-2.jpg" alt="Maa Sarada" className="zigzag-image" />
        <div className="zigzag-content reverse">
          <h2>ধৈর্য ধরতে হবে পৃথিবীর মতো। পৃথিবীর উপর কত পাপই না ঘটছে! তবু সে চুপ করে সহ্য করে যাচ্ছে।</h2>
          <p>নিজের প্রতি বিশ্বাস রাখো, অপরকে ভালোবাসো, সহানুভূতির সঙ্গে চলো, এবং মনকে শান্ত রাখো।</p>
          <p>প্রতিটি ছাত্রীর মনে মাতৃভক্তি জাগুক, প্রতিটি ছাত্র হোক শ্রীমার মতো অন্তর্যামী ও শক্তিশালী।</p>
          <p>শ্রী সারদা মাতার আশীর্বাদে আমাদের শিক্ষার্থীরা হোক সত্য, বিশ্বাস ও আত্মত্যাগের পথযাত্রী।</p>
        </div>
      </div>

      <div className="zigzag-item">
        <img src="/idiol/card-3.jpg" alt="Swami Vivekananda" className="zigzag-image" />
        <div className="zigzag-content">
          <h2>Arise! Awake! And stop not until the goal is reached.</h2>
          <p>
            Swami Vivekananda, the torchbearer of Indian youth, ignited a fire of strength, self-confidence, and purpose in the hearts of millions. His message was clear — true education builds
            character, inspires courage, and reveals the divinity within each soul.
          </p>
          <p>To students, he said:</p>
          <p>“You are the makers of your own destiny. Believe in yourself. Take up one idea — make that one idea your life.”</p>
          <p>Let every student rise with courage, Walk with truth, And serve with love.</p>
        </div>
      </div>
    </div>
  );
};

export default IdiolTalk;
