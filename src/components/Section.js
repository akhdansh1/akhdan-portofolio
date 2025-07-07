import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const sectionContent = {
  "/about": {
  title: "About",
  description: (
    <>
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I am a 5th semester Informatics student who focuses on web interface development (front-end) and data visualization.
        Armed with skills in <strong>HTML, CSS, JavaScript, Bootstrap, PHP</strong>, and frameworks such as{" "}
        <strong>CodeIgniter, React.js, and Laravel</strong> (for client-side integration), I am able to build responsive and functional web displays.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        In addition, I also have an interest and ability in <strong>data science</strong>, especially data visualization and basic machine learning using <strong>Python</strong>.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Outside of the technical aspects, I also act as a <strong>Social Media Specialist</strong> who is active in digital content management,
        social media performance analysis, and optimization of digital communication strategies.
      </motion.p>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        I continue to develop myself through various certification programs such as{" "}
        <strong>Google Play Academy - Store Listing Certificate</strong>, as well as a number of trainings from{" "}
        <strong>Dicoding</strong> and <strong>CCAI</strong> that cover the basics of AI, cloud, programming, data visualization, to system integration.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        With a combination of technical expertise and digital understanding, I am ready to contribute to teams and projects
        that prioritize <strong>technology, data,</strong> and <strong>effective user interaction</strong>.
      </motion.p>
    </>
  ),
},
  "/education": {
  title: "Education",
  description: (
    <>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Senior High School</h2>
        <p className="text-gray-800 font-medium">SMAN 1 Cikampek</p>
        <p className="text-sm text-gray-600">Science Major (2020 – 2023)</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-blue-600 mb-2">University</h2>
        <p className="text-gray-800 font-medium">Institut Teknologi Sains Bandung — Informatics Engineering</p>
        <p className="text-sm text-gray-600 mb-2">2023 – Present | 5th Semester</p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Fokus pada pengembangan front-end web, data visualization, serta pemanfaatan teknologi modern seperti AI dan cloud system melalui pelatihan dan proyek kolaboratif.
        </p>
      </motion.div>
    </>
  ),
},
  "/working-experience": {
  title: "Working Experience",
  description: (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          role: "Community Manager Intern",
          company: "PT Renjana Sinergi Indonesia",
          period: "Nov 2024 – Jan 2025",
          details:
            "As a Community Manager, I specialize in building and nurturing online and offline communities by fostering engagement, managing social media interactions, and creating meaningful connections. My role involves content moderation, organizing events, addressing inquiries, and gathering insights to enhance community experiences. With strong communication, problem-solving, and data analysis skills, I ensure a positive and interactive environment that strengthens brand presence and user engagement.",
          delay: 0.1,
        },
        {
          role: "Social Media Admin Intern",
          company: "PT Renjana Sinergi Indonesia",
          period: "Jul 2024 – Oct 2024",
          details:
            "As a Social Media Specialist, I manage and optimize social media platforms to enhance brand awareness, engagement, and audience growth. My role includes creating and curating content, scheduling posts, analyzing performance metrics, and implementing effective strategies to drive traffic and interactions. I also monitor trends, engage with followers, and collaborate with teams to ensure a strong and consistent online presence.",
          delay: 0.2,
        },
        {
          role: "Marketing Networking Agent Intern",
          company: "Lejel Labs Global",
          period: "Dec 2023 – Feb 2024",
          details:
            "Building and maintaining a network of business relationships to promote client products or services, increase brand awareness, and create new business opportunities through events, campaigns, and effective marketing strategies.",
          delay: 0.3,
        },
        {
          role: "Crew Outlet",
          company: "Nyoklat Super Karawang",
          period: "Jul 2023 – Sep 2023",
          details:
            "As an outlet crew at Nyoklat Super, my duties include serving customers in a friendly and efficient manner, preparing food and drinks according to orders, and maintaining the cleanliness and orderliness of the work area. I am also responsible for receiving orders through the cashier, processing payments quickly and accurately, and providing product recommendations to customers according to their preferences and needs.",
          delay: 0.4,
        },
      ].map((exp, index) => (
        <motion.div
          key={index}
          className="bg-blue-50 border border-blue-100 p-4 rounded-lg shadow hover:shadow-lg transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: exp.delay }}
        >
          <h3 className="text-lg font-semibold text-blue-700 mb-1">{exp.role}</h3>
          <p className="text-sm text-gray-600 mb-1">{exp.company}</p>
          <p className="text-xs text-gray-500 italic mb-2">{exp.period}</p>
          <p className="text-sm text-gray-700 leading-relaxed">{exp.details}</p>
        </motion.div>
      ))}
    </div>
  ),
},
  "/licenses-and-certifications": {
  title: "Licenses & Certifications",
  description: (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: "Code Generation and Optimization Using IBM Granite",
          issued: "June 2025",
          expired: "-",
          link: "https://www.credly.com/badges/112f1995-1da2-4d49-a149-b85f842e0365/public_url",
        },
        {
          name: "Dicoding - Belajar Back-End Pemula dengan JavaScript",
          issued: "April 2025",
          expired: "April 2028",
          link: "https://www.dicoding.com/certificates/KEXL7W6L4XG2",
        },
        {
          name: "Google Play Academy - Store Listing Certificate",
          issued: "April 2025",
          expired: "April 2028",
          link: "https://www.credential.net/4ad398b8-9cb8-4504-8810-d6488d224399#acc.zrkJiy8W",
        },
        {
          name: "Dicoding - Memulai Pemrograman dengan Python",
          issued: "April 2025",
          expired: "April 2028",
          link: "https://www.dicoding.com/certificates/GRX5315VRZ0M",
        },
        {
          name: "Dicoding - Belajar Dasar AI",
          issued: "September 2024",
          expired: "September 2027",
          link: "https://www.dicoding.com/certificates/N9ZOM87YRPG5",
        },
        {
          name: "Dicoding - Belajar Dasar Visualisasi Data",
          issued: "September 2024",
          expired: "September 2027",
          link: "https://www.dicoding.com/certificates/98XWL9N9JZM3",
        },
        {
          name: "Google Cloud Skills Boost - CCAI Frontend Integrations",
          issued: "July 2024",
          expired: "-",
          link: "https://www.cloudskillsboost.google/public_profiles/3c46f686-730b-4bd7-9067-823509a9f726/badges/9820482?utm_campaign=ql-social-share&utm_medium=social&utm_source=linkedin",
        },
        {
          name: "Google Cloud Skills Boost - CCAI Architecture",
          issued: "July 2024",
          expired: "-",
          link: "https://www.cloudskillsboost.google/public_profiles/3c46f686-730b-4bd7-9067-823509a9f726/badges/9824066?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        },
        {
          name: "Google Cloud Skills Boost - Configure and Maintain CCAIP as an Admin",
          issued: "June 2024",
          expired: "-",
          link: "https://www.cloudskillsboost.google/public_profiles/3c46f686-730b-4bd7-9067-823509a9f726/badges/9548653?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        },
        {
          name: "Google Cloud Skills Boost - Handle Consumer Interactions with CCAIP",
          issued: "June 2024",
          expired: "-",
          link: "https://www.cloudskillsboost.google/public_profiles/3c46f686-730b-4bd7-9067-823509a9f726/badges/9539933?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        },
        {
          name: "Google Cloud Skills Boost - Manage Functions and Reporting with CCAIP",
          issued: "June 2024",
          expired: "-",
          link: "https://www.cloudskillsboost.google/public_profiles/3c46f686-730b-4bd7-9067-823509a9f726/badges/9543236?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        },
        {
          name: "Dicoding - Belajar Dasar Pemrograman JavaScript",
          issued: "May 2024",
          expired: "May 2027",
          link: "https://www.dicoding.com/certificates/0LZ06G8Y0Z65",
        },
        {
          name: "Dicoding - Belajar Dasar Cloud dan Gen AI di AWS",
          issued: "May 2024",
          expired: "May 2027",
          link: "https://www.dicoding.com/certificates/2VX3RY4LVZYQ",
        },
        {
          name: "Dicoding - Belajar Dasar Structured Query Language (SQL)",
          issued: "October 2023",
          expired: "October 2026",
          link: "https://www.dicoding.com/certificates/L4PQQ1O57PO1",
        },
        {
          name: "Dicoding - Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
          issued: "January 2024",
          expired: "January 2027",
          link: "https://www.dicoding.com/certificates/1RXY12ML3PVM",
        },
      ].map((cert, index) => (
        <motion.div
          key={index}
          className="bg-white p-4 border border-blue-100 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 * index }}
        >
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-blue-700 mb-1">
              {cert.name}
            </h3>
            <p className="text-xs text-gray-500">
              <span className="font-medium">Issued:</span> {cert.issued}
            </p>
            <p className="text-xs text-gray-500 mb-3">
              <span className="font-medium">Expires:</span> {cert.expired}
            </p>
          </div>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition underline"
          >
            View Certificate →
          </a>
        </motion.div>
      ))}
    </div>
  ),
},
  "/organization": {
  title: "Organization",
  description: (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: "Himpunan Mahasiswa Informatika ITSB",
          role: "Head Of Entrepreneurship Division (April 2025 – Sekarang)",
          image: "/images/hima-if.jpg", // ganti dengan path gambar asli
          details:
            "Play a role in designing and implementing entrepreneurship programs for Informatics students, including training, seminars, and campus bazaar events. Involved in business strategy planning, managing the association's independent business, and seeking opportunities for cooperation with external parties. Also active in managing division finances, making activity reports, and building an entrepreneurial spirit in the student environment.",
          delay: 0.1,
        },
        {
          name: "Scifun by Unedo Kasih",
          role: "Volunteer (July 2024 – Sekarang)",
          image: "/images/scifun.jpg",
          details:
            "Actively educating elementary and junior high school aged children in various orphanages through projects.",
          delay: 0.2,
        },
        {
          name: "Generasi Literasi Batch 7",
          role: "Volunteer (June 2024 – August)",
          image: "/images/genlit.jpg",
          details:
            "Active as a literacy volunteer at Indorelawan is teaching reading and writing, providing motivation and support to students, compiling learning materials, and organizing literacy activities to increase reading interest in the community.",
          delay: 0.3,
        },
        {
          name: "Youth Rangers Indonesia",
          role: "Member (June 2024 – Sekarang)",
          image: "/images/yri.jpg",
          details:
            "As a member of Youth Rangers Indonesia, my job is to actively participate in the loyalty program, attend events and activities held, and provide feedback to improve the organization's experience and services.",
          delay: 0.4,
        },
        {
          name: "Event Gema by @fypmedia and @fypmediajkt",
          role: "Volunteer, Logistic Coordinator (June 2024 - August 2024)",
          image: "/images/gema.jpg",
          details:
            "The duties of the logistics division at Gema Event Collaboration are to arrange transportation, accommodation, and equipment, coordinate with vendors, manage inventory, ensure smooth event operations, and handle any logistical issues that arise.",
          delay: 0.5,
        },
        {
          name: "SAN Chapter Karawang",
          role: "Public Relation (April 2024 - Sekarang)",
          image: "/images/san karawang.jpg",
          details:
            "As a public relations in SAN Chapter Karawang, my job is to build good relationships with the media and community, manage internal and external communications, plan and manage events to increase brand awareness, as well as handle crisis situations and report the results of PR activities to management.",
          delay: 0.5,
        },
        {
          name: "Novo Club Batch 3 by Paragon Corp",
          role: "Member (March 2024 - Sekarang)",
          image: "/images/novo.jpeg",
          details:
            "As a member of Novo Club by ParagonCorp, my role is to actively participate in the loyalty program, attend events and activities organized, and provide feedback to improve the club experience and services.",
        }
      ].map((org, index) => (
        <motion.div
          key={index}
          className="bg-white border border-blue-100 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: org.delay }}
        >
          <img
            src={org.image}
            alt={org.name}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold text-blue-700 mb-1">
            {org.name}
          </h3>
          <p className="text-sm text-gray-600 italic mb-2">{org.role}</p>
          <p className="text-sm text-gray-700 leading-relaxed">{org.details}</p>
        </motion.div>
      ))}
    </div>
  ),
},
  "/skills": {
  title: "Skills",
  description: (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05 },
        },
      }}
    >
      {[
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Bootstrap", icon: "📦" },
        { name: "PHP", icon: "🐘" },
        { name: "CodeIgniter", icon: "🔥" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Python", icon: "🐍" },
        { name: "React.js", icon: "⚛️" },
        { name: "Artificial Intelligence", icon: "🧠" },
        { name: "Machine Learning", icon: "📊" },
        { name: "Deep Learning", icon: "🌌" },
        { name: "MySQL", icon: "🐬" },
        { name: "SQLite", icon: "💾" },
        { name: "Supabase", icon: "🧪" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Data Analysis", icon: "📈" },
        { name: "Data Visualization", icon: "📊" },
        { name: "Web Development", icon: "🛠️" },
        { name: "Web Design", icon: "🖌️" },
      ].map((skill, index) => (
        <motion.div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 text-center hover:shadow-md transition"
          whileHover={{ scale: 1.05 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-3xl mb-2">{skill.icon}</div>
          <div className="text-sm font-medium text-gray-700">{skill.name}</div>
        </motion.div>
      ))}
    </motion.div>
  ),
},
  "/honorary-titles-and-awards": {
  title: "Honorary Title & Awards",
  description: (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {[
        {
          title: "🏆 1st Winner Desain Poster of “The Forsma ITSB 2024” Competition",
          description: "Meraih juara pertama dalam lomba desain poster pada ajang The Forsma ITSB 2024, dengan karya yang menonjol dalam visual storytelling, komposisi warna, dan pesan komunikasi yang efektif. Kompetisi ini diikuti oleh puluhan peserta dari berbagai universitas dan difokuskan pada tema kreativitas dan inovasi generasi muda.",
          link: "https://drive.google.com/file/d/1_fs1GRzz30JKlua8EUxZaYiIhhaXmmJ3/view?usp=sharing",
        },
        {
          title: "🎖️ Awardee Gold Medal Biology of Indonesian Youth Science Olympiad 2024",
          description: "Berhasil meraih medali emas dalam bidang Biologi pada Indonesian Youth Science Olympiad (IYSO) 2024. Penghargaan ini diberikan atas pencapaian luar biasa dalam pemahaman konsep biologi, analisis ilmiah, dan pemecahan masalah tingkat nasional, menunjukkan kompetensi tinggi di antara peserta dari seluruh Indonesia.",
          link: "https://drive.google.com/file/d/1zE6milOQFPGngRTvgexP23G74h6yl3gg/view?usp=sharing",
        },
        {
          title: "🥇 Awardee Gold Medal Biology of Kompetisi Akademi Nasional Hari Pancasila 2024",
          description: "Meraih medali emas dalam bidang Biologi pada Kompetisi Akademi Nasional Hari Pancasila 2024. Prestasi ini mencerminkan keunggulan dalam penguasaan materi biologi serta kemampuan analitis dan ilmiah dalam kompetisi yang diselenggarakan untuk memperingati Hari Lahir Pancasila, dengan peserta dari berbagai daerah di Indonesia.",
          link: "https://drive.google.com/file/d/1JW5MM4IsyP12X_XyrdD2GKyD1j5OtKKG/view?usp=sharing",
        },
        {
          title: "💡 Participant of Google Cloud Arcade Fasilitator Indonesia 2024",
          description: "Berpartisipasi dalam Google Cloud Arcade Facilitator Program tahun 2024, sebuah program pembelajaran interaktif dari Google yang dirancang untuk membekali peserta dengan pemahaman dan pengalaman langsung mengenai teknologi cloud, seperti Google Cloud Platform (GCP), machine learning, dan solusi cloud-native lainnya.",
          link: "https://www.cloudskillsboost.google/public_profiles/3c46f686-730b-4bd7-9067-823509a9f726",
        },
        {
          title: "📚 Participant of Desain Poster “Hijriah Fest ICE FEB UNESA” Universitas Negeri Surabaya",
          description: "Berpartisipasi dalam lomba desain poster dalam rangka Hijriah Fest yang diselenggarakan oleh Islamic Creative Economy (ICE), Fakultas Ekonomi dan Bisnis, Universitas Negeri Surabaya. Kegiatan ini bertujuan untuk mengasah kreativitas visual dalam menyampaikan pesan Islami dan semangat tahun baru Hijriah melalui media grafis.",
          link: "https://drive.google.com/file/d/1pYhkO2WAaCmLTz730dJMqHTYFS1pg-ei/view?usp=sharing",
        },
      ].map((award, index) => (
        <motion.a
          key={index}
          href={award.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
          whileHover={{ scale: 1.03 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-xl font-semibold mb-2">{award.title}</div>
          <p className="text-gray-600 text-sm">{award.description}</p>
        </motion.a>
      ))}
    </motion.div>
  ),
},
  "/technologies": {
  title: "Technologies",
  description: (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {[
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "CodeIgniter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      ].map((tech, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          whileHover={{ scale: 1.05 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain mb-3" />
          <div className="text-sm font-medium text-center">{tech.name}</div>
        </motion.div>
      ))}
    </motion.div>
  ),
},
"/project": {
  title: "Projects",
  description: (
    <motion.div
      className="grid md:grid-cols-2 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {[
        {
          title: "Student Graduation Prediction",
          mediaType: "video",
          mediaSrc: "/video/student graduation.mp4",
          link: "https://student-graduation-predictor-wxv6nuyyxanvedp3gdhhyx.streamlit.app/",
        },
        {
          title: "WhoAreYouBy Music",
          mediaType: "video",
          mediaSrc: "/video/whoareyoubymusic.mp4",
          link: "https://github.com/akhdansh1/whoareyoubymusic",
        },
        {
          title: "My Portfolio",
          mediaType: "video",
          mediaSrc: "/video/My Portfolio - Google Chrome 2025-06-30 20-48-24.mp4",
          link: "https://my-portofolio-brown-five.vercel.app/",
        },
        {
          title: "Halo Sehat",
          mediaType: "video",
          mediaSrc: "/video/mediconnect.mp4",
          link: "https://github.com/akhdansh1/halosehat",
        },
        {
          title: "YOLO Vehicle Detection",
          mediaType: "image",
          mediaSrc: "/images/yolo.jpg",
          link: "https://github.com/akhdansh1/Deteksi-Kendaraan-Menggunakan-YOLOv8-YOLOv9-dan-YOLOv10",
        },
        {
          title: "ITSB One",
          mediaType: "video",
          mediaSrc: "/video/itsb one.mp4",
          link: "https://github.com/akhdansh1/itsb-one-cadangan",
        },
        {
          title: "Arduino RFID Door System",
          mediaType: "image",
          mediaSrc: "images/arduino rfid.jpg",
          link: null,
        },
      ].map((project, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow p-4 space-y-2"
          whileHover={{ scale: 1.02 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
          {project.mediaType === "video" ? (
            <video
              src={project.mediaSrc}
              controls
              className="w-full rounded"
            />
          ) : (
            <img
              src={project.mediaSrc}
              alt={project.title}
              className="w-full h-auto rounded"
            />
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              🔗 Visit Project
            </a>
          )}
        </motion.div>
      ))}
    </motion.div>
  ),
},

  "/contact": {
  title: "Contact",
  description: (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      <motion.p
        className="text-gray-700"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      >
        Saya terbuka untuk kolaborasi, proyek freelance, atau diskusi seputar teknologi. Hubungi saya melalui:
      </motion.p>

      <motion.ul
        className="space-y-4"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        {[
          {
            name: "Email",
            value: "akhdanshalahudin@gmail.com",
            link: "mailto:akhdanshalahudin@gmail.com",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg",
          },
          {
            name: "LinkedIn",
            value: "Akhdan Shalahudin",
            link: "https://www.linkedin.com/in/akhdan-shalahudin-12232b271/",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
          },
          {
            name: "GitHub",
            value: "akhdansh1",
            link: "https://github.com/akhdansh1",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
          },
          {
            name: "WhatsApp",
            value: "+62 877-7031-1459",
            link: "https://wa.me/6287770311459",
            icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg",
          },
        ].map((contact, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src={contact.icon} alt={contact.name} className="w-5 h-5" />
            <span className="w-28 font-medium">{contact.name}</span>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline truncate"
            >
              {contact.value}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  ),
},
};

export default function Section({ title }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const content = sectionContent[location.pathname];

  const BackgroundSVG = () => (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
    <svg
      className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] opacity-30 text-blue-300"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M46.4,-51.5C58.1,-39.5,64.2,-19.8,61.5,-2.2C58.8,15.4,47.3,30.8,35.6,44.1C23.8,57.5,11.9,68.8,-3.4,72.7C-18.8,76.6,-37.5,73,-52.6,61.2C-67.8,49.4,-79.5,29.5,-78.3,11.1C-77.2,-7.3,-63.2,-23.2,-49.1,-35.4C-35,-47.5,-20.9,-56.1,-5.3,-58.5C10.4,-60.9,20.9,-57.3,46.4,-51.5Z"
        transform="translate(100 100)"
      />
    </svg>
    <svg
      className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] opacity-20 text-blue-200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M50.2,-62.7C63.2,-50.4,70.7,-31.5,72.1,-13.6C73.5,4.3,68.9,21.1,60.1,35.9C51.3,50.8,38.3,63.7,23.2,70.4C8.2,77.1,-8.8,77.6,-25.3,71.3C-41.9,64.9,-57.9,51.6,-65.1,35.1C-72.2,18.6,-70.6,-1.1,-62.5,-17.3C-54.5,-33.5,-40.1,-46.1,-24.8,-57.1C-9.6,-68.1,7.4,-77.4,24.6,-76.3C41.7,-75.1,58.2,-63.7,50.2,-62.7Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>
);


  if (isHome) {
    return (
      <motion.section
        className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 sm:px-12 py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <BackgroundSVG />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12 z-10">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm sm:text-base text-blue-500 mb-2 font-medium tracking-wide">
              Web Developer • Front-End Enthusiast
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Halo, saya{" "}
              <span className="text-blue-600 border-b-4 border-blue-300 hover:text-blue-700 transition-colors cursor-pointer">
                Akhdan Shalahudin
              </span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-lg mx-auto md:mx-0">
              Frontend Developer yang berfokus pada pembuatan antarmuka modern, responsif, dan interaktif menggunakan React dan Tailwind CSS.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl bg-white"
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <img
              src="/profil.jpg"
              alt="Foto Akhdan"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 sm:px-12 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BackgroundSVG />

      <motion.div
        className="w-full max-w-4xl bg-white p-6 sm:p-10 rounded-xl shadow-md border border-blue-100 z-10"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          {content?.title || "Page Not Found"}
        </h1>
        <div className="text-gray-700 text-base leading-relaxed text-justify">
          {content?.description || "Maaf, halaman ini tidak tersedia."}
        </div>
      </motion.div>
    </motion.section>
  );
}
