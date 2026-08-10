import React from "react";
import Link from "next/link";

const FAQSection = () => {
  return (
    <section className="text-gray-800 bg-white">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center text-red-600 uppercase">
          সাধারণ জিজ্ঞাসা
        </p>
        <h2 className="mb-12 text-xl font-bold leading-none text-center text-blue-950 sm:text-3xl">
          আল-ওয়াকিয়া হজ কাফেলা &ndash; প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
        </h2>

        <div className="flex flex-col divide-y text-gray-900 sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">
              হজ ও ওমরাহ প্যাকেজে কী কী ধরনের আবাসন/হোটেল সুবিধা রয়েছে?
            </summary>
            <div className="px-4 pb-4">
              <p>
                আমরা <strong>ভিআইপি/এক্সিকিউটিভ এবং স্ট্যান্ডার্ড ইকোনমি</strong> দুই ধরনের আবাসন অফার করে থাকি। মক্কা ও মদিনায় হারাম শরীফের কাছাকাছি ৪/৫ তারকা বা মানসম্মত ৩ তারকা হোটেলে ৩/৪ জন শেয়ারিং রুম এবং দম্পতিদের জন্য <strong>২ বেডের প্রাইভেট রুম/ক্যাবিন</strong> ব্যবস্থার সুবিধা রয়েছে।
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">
              আমাদের হজ ও ওমরাহ প্যাকেজে কী কী সেবা অন্তর্ভুক্ত রয়েছে?
            </summary>
            <div className="px-4 pb-4">
              <p className="font-semibold">প্যাকেজে অন্তর্ভুক্ত (Inclusions):</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>ঢাকা–জেদ্দা–ঢাকা রিটার্ন এয়ার টিকিট ও হজ/ওমরাহ ভিসা উইথ ইনস্যুরেন্স</li>
                <li>মক্কা ও মদিনায় নির্ধারিত মানের হোটেলে থাকার ব্যবস্থা</li>
                <li>অভিজ্ঞ মুয়াল্লিম ও আলেমের তত্ত্বাবধানে সুন্নাহ অনুযায়ী আমল ও নির্দেশিকা</li>
                <li>মক্কা, মদিনা, মিনা ও আরাফাতে শীতাতপ নিয়ন্ত্রিত বাসে যাতায়াত</li>
                <li>প্রতিদিন তিন বেলা স্বাস্থ্যসম্মত দেশীয় খাবারের ব্যবস্থা (প্যাকেজ ভেদে)</li>
                <li>মক্কা ও মদিনার ঐতিহাসিক দর্শনীয় স্থানসমূহ (জিয়ারা) পরিদর্শন</li>
              </ul>
              <p className="font-semibold mt-2">প্যাকেজের বাইরে (Exclusions):</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>ব্যক্তিগত কেনাকাটা বা ব্যক্তিগত চিকিৎসা খরচ</li>
                <li>এয়ারপোর্ট বা হোটেলে অতিরিক্ত মালামাল বহনের কুলির খরচ</li>
                <li>কোরবানির খরচ (হজের ক্ষেত্রে পৃথক আলোচনা সাপেক্ষে)</li>
              </ul>
              <p className="mt-2">
                আমাদের পরবর্তী কাফেলার সূচি দেখতে ভিজিট করুন <Link href="/schedule" className="text-blue-800 font-semibold">সময়সূচী</Link> পেজে।
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">
              ওমরাহ বা হজ ভ্রমণের সাধারণ সময়সূচী কেমন হয়?
            </summary>
            <div className="px-4 pb-4 space-y-1">
              <p><strong>ফ্লাইটের দিন:</strong> হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর থেকে জেদ্দা/মদিনা উদ্দেশ্যে প্রস্থান।</p>
              <p><strong>১ম থেকে ৭ম দিন:</strong> মক্কায় অবস্থান, ইহরাম গ্রহণ, ওমরাহ পালন এবং হারাম শরীফে নিয়মিত ইবাদত।</p>
              <p><strong>ঐতিহাসিক জিয়ারা:</strong> মক্কার জাবালে নূর, জাবালে সাওর, মিনা, আরাফাত ও মুজদালিফা পরিদর্শনের বিশেষ বাস সেবা।</p>
              <p><strong>৮ম থেকে ১৪তম দিন:</strong> শান্তিময় শহর মদিনায় স্থানান্তরিত হওয়া, রিয়াজুল জান্নাহ জিয়ারত ও ঐতিহাসিক স্থানসমূহ ভ্রমণ।</p>
              <p><strong>ফেরার দিন:</strong> মদিনা/জেদ্দা এয়ারপোর্ট থেকে ঢাকার উদ্দেশ্যে ফেরত যাত্রা।</p>
              <p className="mt-2">
                প্যাকেজ বুকিংয়ের জন্য দেখুন আমাদের <Link href="/ticket" className="text-blue-800 font-semibold">প্যাকেজ তালিকা</Link>।
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">
              হজ বা ওমরাহে বয়সের কোনো বাধ্যবাধকতা আছে কি?
            </summary>
            <div className="px-4 pb-4">
              <p>না, যেকোনো বয়সের নারী-পুরুষ ও শিশুরা আমাদের কাফেলার সাথে যেতে পারবেন। শিশু, বয়স্ক ব্যক্তি এবং হুইলচেয়ার প্রয়োজন এমন হাজীদের জন্য বিশেষ যত্ন ও দিকনির্দেশনা দেওয়া হয়।</p>
              <p className="mt-2">
                বিস্তারিত আলোচনার জন্য <Link href="/contact" className="text-blue-800 font-semibold">যোগাযোগ করুন</Link>।
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">
              শিশুদের প্যাকেজ ফি বা নীতিমালা কেমন?
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>০ থেকে ২ বছর (ইনফ্যান্ট):</strong> শুধুমাত্র এয়ার টিকিট, ভিসা ও সার্ভিস চার্জ প্রযোজ্য (হোটেল বেড ছাড়া)।</li>
                <li><strong>২ থেকে ১২ বছর (চাইল্ড):</strong> পৃথক এয়ার টিকিট, ভিসা এবং শেয়ারিং বেড অথবা উইদাউট বেড পলিসি অনুযায়ী সাশ্রয়ী প্যাকেজ ফি।</li>
                <li><strong>১২ বছরের উপরে:</strong> পূর্ণাঙ্গ এডাল্ট প্যাকেজ ফি প্রযোজ্য।</li>
              </ul>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">
              নিবন্ধন ও অর্থ পরিশোধের মাধ্যমসমূহ কী কী?
            </summary>
            <div className="px-4 pb-4">
              <p className="font-semibold">মোবাইল ব্যাংকিং (MFS):</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>বিকাশ (bKash)</li>
                <li>নগদ (Nagad)</li>
                <li>রকেট (Rocket)</li>
              </ul>
              <p className="font-semibold mt-2">ডাইরেক্ট ব্যাংক ট্রান্সফার:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>ব্র্যাক ব্যাংক বা আমাদের অনুমোদিত অন্য যেকোনো বাণিজ্যিক ব্যাংক অ্যাকাউন্টে জমা।</li>
              </ul>
              <p className="font-semibold mt-2">নগদ মূল্য (Cash):</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>আমাদের অফিসে সরাসরি এসে ক্যাশ পেমেন্ট করে রশিদ গ্রহণ করা যাবে।</li>
              </ul>
              <p className="mt-2">
                অর্থ প্রদানের নিয়ম জানতে ভিজিট করুন <Link href="/payment" className="text-blue-800 font-semibold">পেমেন্ট অপশন</Link> পেজে।
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">
              প্যাকেজ বাতিল বা রিফান্ড পলিসি কী?
            </summary>
            <div className="px-4 pb-4">
              <p className="font-semibold">সরকারি বা আন্তর্জাতিক ফ্লাইটের কারণে সফর বাতিল হলে:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>ভিসা, এয়ারলাইনস ও সৌদি আবাসন নীতি অনুযায়ী রিফান্ড বা সফর পুনর্বিন্যাস করার সুযোগ থাকে।</li>
              </ul>
              <p className="font-semibold mt-2">যাত্রীর ব্যক্তিগত কারণে বাতিল হলে:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>ভিসা ও এয়ারলাইনসের প্রসেসিং সম্পূর্ণ হয়ে গেলে সেটির নির্দিষ্ট ফি কেটে বাকি অর্থ ফেরত যোগ্য।</li>
                <li>সফরের নির্দিষ্ট সময়ের আগে অবহিত করলে কাফেলার নীতিমালা অনুযায়ী রিফান্ড প্রদান করা হয়।</li>
              </ul>
              <p className="mt-2">
                যেকোনো প্রয়োজনে <Link href="/contact" className="text-blue-800 font-semibold">আমাদের সাথে কথা বলুন</Link>।
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">
              ভ্রমণের সময় সাথে কী কী কাগজপত্র ও জিনিসপত্র রাখা আবশ্যক?
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>ন্যূনতম ৬ মাসের মেয়াদসহ মূল পাসপোর্ট ও পাসপোর্টের কপি</li>
                <li>জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধনের ফটোকপি</li>
                <li>করোনা টিকা/স্বাস্থ্য সেবার প্রয়োজনীয় সনদের ডিজিটাল বা প্রিন্ট কপি</li>
                <li>ব্যক্তিগত প্রয়োজনীয় ওষুধপত্র ও ঢিলেঢালা সুতির পোশাক</li>
                <li>পাসপোর্ট সাইজের ছবি (জরুরি প্রয়োজনে)</li>
              </ul>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">
              কিভাবে বুকিং করবেন ও যোগাযোগ করবেন?
            </summary>
            <div className="px-4 pb-4">
              <p>যে কোনো তথ্য ও দ্রুত বুকিংয়ের জন্য যোগাযোগ করুন:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>📞 <strong>+৮৮০ ১৮৪১-৬৬৬৬৪৪</strong></li>
                <li>📞 <strong>+৮৮০ ১৮৪১-৩৩৩৩২২</strong></li>
              </ul>
              <p className="mt-2">
                সাইটের বিভিন্ন পেজে নেভিগেট করুন: <Link href="/" className="text-blue-800 font-semibold">হোম</Link> | <Link href="/schedule" className="text-blue-800 font-semibold">সময়সূচী</Link> | <Link href="/ticket" className="text-blue-800 font-semibold">প্যাকেজ</Link> | <Link href="/payment" className="text-blue-800 font-semibold">পেমেন্ট অপশন</Link> | <Link href="/contact" className="text-blue-800 font-semibold">যোগাযোগ</Link>
              </p>
            </div>
          </details>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;