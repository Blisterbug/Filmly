import React from 'react'
import { Link } from 'react-router-dom'
import MobileHorizontalCard from "../cards/MobileHorizontalCard"
import MobileHorizontalMainCard from "../cards/MobileHorizontalMainCard"
import MobileVerticalCard from '../cards/MobileVerticalCard'
import MobileFooter from '../components/MobileFooter'


const MobileMovies = () => {

    return (
        <>
            <div className='mt-4'><Link to="/" className='mt-4 text-xl'> <i className="fas fa-chevron-left m-2"></i>Go to home page</Link></div>
            <div className=''>
                <section>
                    <div className='p-4'>
                        <MobileHorizontalMainCard
                            id="1"
                            name="Amaran"
                            rating="8.3"
                            duration="2h 47min"
                            year="2024"
                            genre="Action | Biography | Drama"
                            poster="../assets/GOAT VV.jpg"
                            posterV="../vertical assets/amaran.jpg"
                            director="Rajkumar Periasamy"
                            stars="Sivakarthikeyan, Sai Pallavi, Bhuvan Arora"
                            trailer="https://youtu.be/jxCRlebiebw?si=n1jyZ19aSWkclEUI"
                            plot="Gandhi is a hostage negotiator, field agent, and spy working for the Special Anti-Terrorist Squad (SATS). After years of service, he is called back for a critical mission that sets him on a dangerous collision course with his own past."
                        />
                    </div>
                </section>


                <section>
                    <h1 className='text-2xl font-semibold pl-4 -z-0'>Newest Releases</h1>
                    <div className='overflow-x-auto flex p-4 pt-6 gap-6 hide-scrollbar touch-pan-x w-full scrollable '>
                        <MobileHorizontalCard
                            id="1"
                            name="Amaran"
                            rating="8.3"
                            duration="2h 47min"
                            year="2024"
                            genre="Action | Biography | Drama"
                            poster="/assets/Amaran.webp"
                            posterV="../vertical assets/amaran.jpg"
                            director="Rajkumar Periasamy"
                            stars="Sivakarthikeyan, Sai Pallavi, Bhuvan Arora"
                            trailer="https://youtu.be/hylIXfZeB4c?si=nuWOW-DHdQ_xvM5g"
                            plot="The life of Major Mukund Varadarajan and is set against the backdrop of the Qazipathri Operation in Shopian, Kashmir, which took place back in 2014."
                        />
                        <MobileHorizontalCard
                            id="2"
                            name="Maharaja"
                            rating="8.5"
                            duration="2h 21min"
                            year="2024"
                            genre="Action | Drama | Crime"
                            poster="../assets/Maharaja.webp"
                            posterV="../vertical assets/maharaja.jpg"
                            director="Nithilan Saminathan"
                            stars="Vijay Sethupathy, Anurag Kashyap, Mamta Mohandas"
                            trailer="https://youtu.be/z37hCm4eges?si=Qy6QCp9aLx_Jg3Sz"
                            plot="A barber seeks vengeance after his home is burglarized, cryptically telling police his lakshmi has been taken, leaving them uncertain if it's a person or object. His quest to recover the elusive lakshmi unfolds."
                        />
                        <MobileHorizontalCard
                            id="3"
                            name="Kanguva"
                            rating="4.8"
                            duration="2h 32min"
                            year="2024"
                            genre="Action | Fantasy | Drama"
                            poster="../assets/Kanguva.webp"
                            posterV="../vertical assets/kanguva.jpg"
                            director="Siruthai Siva"
                            stars="Surya, Disha Patani, Bobby Deol"
                            trailer="https://youtu.be/ajnCMSC4VPo?si=X2W0BkFp2g5B5udV"
                            plot="A tribal warrior's fierce struggle to save his people a millennium ago is mysteriously linked to a shadow cop's perilous quest in the present."
                        />
                        <MobileHorizontalCard
                            id="4"
                            name="Kishkindha Kandam"
                            rating="8.1"
                            duration="2h 13min"
                            year="2024"
                            genre="Mystery"
                            poster="../assets/Kishkindha-Kandam.avif"
                            posterV="../vertical assets/Kishkindha Kaandam.jpg"
                            director="Dinjith Ayyathan"
                            stars="Asif Ali, Vijayaraghavan, Aparna Balamurali"
                            trailer="https://youtu.be/6jR7lL-o7js?si=42-_o0Vhpe821VGi"
                            plot="Strange events unfold in a monkey-inhabited village, prompting a newlywed pair and forest officials to embark on a mission to uncover the root cause of the peculiar disturbances"
                        />
                        <MobileHorizontalCard
                            id="5"
                            name="Thangalaan"
                            rating="6.9"
                            duration="2h 36min"
                            year="2024"
                            genre="Action | Adventure | Drama"
                            poster="../assets/Thangalaan.webp"
                            posterV="../vertical assets/Thangalaan.jpg"
                            director="Pa Ranjith"
                            stars="Vikram, Parvathy Thiruvothu, Malavika Mohanan"
                            trailer="https://youtu.be/9KUOQvF25NI?si=DjbX-0kSgkhK73yb"
                            plot="Based on the true events that revolve around the lives of mine workers in the Kolar Gold Fields, Karnataka."
                        />

                        <MobileHorizontalCard
                            id="39"
                            name="Hitler"
                            rating="5.2"
                            duration="2h 8min"
                            year="2024"
                            genre="Action | Comdey | Thriller"
                            poster="../assets/Hitler.avif"
                            posterV="../vertical assets/Hitler.jpg"
                            director="Dhana Sekaran"
                            stars="GVM, Aadukalam Naren, Vijay Antony"
                            trailer="https://youtu.be/GBOF0SL1jAs?si=Q4V5j6oxRYyi61DI"
                            plot="A hero with a genuine background involved with the political murders. What is the reason behind this that's the Story."
                        />

                        <MobileHorizontalCard
                            id="41"
                            name="Buddy"
                            rating="3.8"
                            duration="2h 17min"
                            year="2024"
                            genre="Action | Adventure | Sci-Fi"
                            poster="../assets/Buddy.avif"
                            posterV="../vertical assets/Buddy.jpg"
                            director="Sam Anton"
                            stars="Gayathri Bhardwaj, Allu Sirish, Ajmal Ameer"
                            trailer="https://youtu.be/44B20OshxwE?si=X54X9OxEFGchKMNB"
                            plot="A teddy bear named Buddy is in trouble and asks pilot Aditya Ram for help. Can the duo join forces and help each other out?"
                        />

                        <MobileHorizontalCard
                            id="42"
                            name="Ayalaan"
                            rating="6.0"
                            duration="2h 35min"
                            year="2024"
                            genre="Action | Adventure | Sci-Fi"
                            poster="../assets/Ayalaan.avif"
                            posterV="../vertical assets/Ayalaan.jpg"
                            director="R.Ravikumar"
                            stars="Sivakarthikeyan, Rakul Preet Singh, Karunakaran"
                            trailer="https://youtu.be/kNpwAxnjbNA?si=bNPOdCWfveZpS_rr"
                            plot="A lost alien seeks help to go back to his home, but everything gets harder after the alien returns to its home"
                        />

                        <MobileHorizontalCard
                            id="43"
                            name="Siren"
                            rating="6.4"
                            duration="2h 34min"
                            year="2024"
                            genre="Action | Crime | Thriller"
                            poster="../assets/Siren.jpg"
                            posterV="../vertical assets/Siren.jpg"
                            director="Antonty Bhagyaraj"
                            stars="Keerty Suresh, Samuthrakani, Jayam Ravi"
                            trailer="https://youtu.be/ATmYzgRQphU?si=chbU66D0HhGhb8gd"
                            plot="An ambulance driver turned criminal eagerly awaits his release from prison, but it takes 14 years."
                        />

                        <MobileHorizontalCard
                            id="44"
                            name="Deepavali Bonus"
                            rating="8.2"
                            duration="2h"
                            year="2024"
                            genre="Drama"
                            poster="../assets/Deepavali Bonus.jpg"
                            posterV="../vertical assets/Deepavali Bonus.jpg"
                            director="Jeyabal J"
                            stars="Vikranth, Riythvika Paneerselvam, Venkatraman Balaji"
                            trailer="https://youtu.be/1wkvILavTP8?si=4H5fCk4aYnZ8gfwf"
                            plot="A working class family in Madurai faces financial struggles as the Deepavali festival approaches, challenging their values and relationships while striving to provide for their son."
                        />

                        <MobileHorizontalCard
                            id="46"
                            name="Lover"
                            rating="7.0"
                            duration="2h 25min"
                            year="2024"
                            genre="Drama | Love"
                            poster="../assets/Lover.avif"
                            posterV="../vertical assets/Lover.jpg"
                            director="Prabhu Ram Vyas"
                            stars="Geetha Kailasam, Maknikandan K , Sri Gouri Priya"
                            trailer="https://youtu.be/UkFD3pKmSks?si=Fm2gRerAJq2KEoiD"
                            plot="Arun and Divya's six-year relationship starts unraveling as they drift apart, raising the question of whether love can withstand such differences."
                        />

                        <MobileHorizontalCard
                            id="47"
                            name="Star"
                            rating="6.5"
                            duration="2h 38min"
                            year="2024"
                            genre="Drama"
                            poster="../assets/Star2.jpg"
                            posterV="../vertical assets/Star.jpg"
                            director="Elan"
                            stars="Kavin, Lal, Aditi Sudhir Pohankar"
                            trailer="https://youtu.be/5QlTZEogGrE?si=5bEO4YUtbP7nxSvl"
                            plot="Follows a youngster Kalai and his aspirations of becoming a 'Star' in the Tamil Film Industry. Born in a lower-middle-class family, will Kalai overcome all his struggles to emerge as a Star?"
                        />

                        <MobileHorizontalCard
                            id="48"
                            name="Virundhu"
                            rating="4.7"
                            duration="2h 5min"
                            year="2024"
                            genre="Thriller"
                            poster="../assets/Virundhu.avif"
                            posterV="../vertical assets/Virundhu.jpg"
                            director="Kannan Thamarakkulam"
                            stars="Arjun Sarja, Nikki Galrani, Gireesh Neyyar"
                            trailer="https://youtu.be/pJn0Tj5fokk?si=ljeEO1wh4Mp0PjvA"
                            plot="A famous businessman committed suicide. After 6 months of his death, his wife Elizabeth, gets killed in a suspicious accident. On her deathbed, she tasks an auto driver with delivering a secret to Comrade Balettan"
                        />

                        <MobileHorizontalCard
                            id="49"
                            name="Byri"
                            rating="7.0"
                            duration="2h 20min"
                            year="2024"
                            genre="Comedy"
                            poster="../assets/Bairi.avif"
                            posterV="../vertical assets/Byri.jpg"
                            director="John Glady"
                            stars="Ramesh Arumugam, Meghana Ellen, John Glady"
                            trailer="https://youtu.be/_lhB_xwFzuk?si=v511SHUBJKDFTMQV"
                            plot="A newly-widowed mother struggles to connect with her son as he copes with his father's death by immersing himself in the intense hobby of racing pigeons, threatening their relationship"
                        />

                        <MobileHorizontalCard
                            id="50"
                            name="Mayan"
                            rating="9.2"
                            duration="1h 53min"
                            year="2024"
                            genre="Fantasy"
                            poster="../assets/Mayan.avif"
                            posterV="../vertical assets/Mayan.jpg"
                            director="J. Rajesh Kanna"
                            stars="Priyanka Arulmohan, Sai Dheena, Bindhu Madhavi"
                            trailer="https://youtu.be/kq9cGEkkgqY?si=dWuj5IzuWRmx2jge"
                            plot="A a mythological mysterious film based on Indian mythology and Mayan tribes and their connection with the apocalypse of this world. Talks about the origins of human and their end."
                        />
                    </div>
                </section>


                <section>
                    <h1 className='text-2xl font-semibold pl-4 pt-2 -z-0'>2024 Top Rated</h1>
                    <div className='overflow-x-auto flex p-4 pt-6 gap-6 hide-scrollbar touch-pan-x w-full scrollable'>

                        <MobileVerticalCard
                            id="6"
                            name="Vettaiyan"
                            rating="7.1"
                            duration="2h 43min"
                            year="2024"
                            genre="Action | Drama | Crime"
                            poster="../assets/Vettaiyan.jpg"
                            posterV="../vertical assets/Vettaiyan2.jpg"
                            director="T.J. Gnanavel"
                            stars="Rajinikanth, Fahad Faasil, Amitabh Bachchan"
                            trailer="https://youtu.be/zPqMbwmGC1U?si=LGf8kFtFLgKViBeB"
                            plot="Ruthless criminal activity is met with force from a maverick police officer with a disregard for the rules as he confronts an outbreak of lawlessness."
                        />
                        <MobileVerticalCard
                            id="7"
                            name="Bagheera"
                            rating="6.8"
                            duration="2h 38min"
                            year="2024"
                            genre="Action | Crime | Drama"
                            poster="../assets/Bagheera.jpg"
                            posterV="../vertical assets/Bagheera.jpg"
                            director="D.R Suri"
                            stars="Sri Murali, Rukumani Vasanth, Prakash Raj"
                            trailer="https://youtu.be/dfKjyu8Oezg?si=IqEKiiOrdW6or-2T"
                            plot="When society turns into a jungle, just one predator cries out for justice."
                        />

                        <MobileVerticalCard
                            id="8"
                            name="Manjummel Boys"
                            rating="8.2"
                            duration="2h 15min"
                            year="2024"
                            genre="Adventure | Drama | Thriller"
                            poster="../assets/Manjummel Boys.webp"
                            posterV="../vertical assets/Manjummel Boys.jpg"
                            director="Chidambaram"
                            stars="Soubin Shahir, Sreenath Bhasi, Balu Varghese"
                            trailer="https://youtu.be/9Lc_Wp3ikCw?si=lhFB0Dn2QeJROvSE"
                            plot="A group of friends get into a daring rescue mission to save their friend from Guna Caves, a perilously deep pit from where nobody has ever been brought back."
                        />


                        <MobileVerticalCard
                            id="9"
                            name="Meiyazhagan"
                            rating="8.4"
                            duration="2h 57min"
                            year="2024"
                            genre="Drama | Family"
                            poster="../assets/Meiyazhagan.jpg"
                            posterV="../vertical assets/Meiyazhagan.jpg"
                            director="C.Prem Kumar"
                            stars="Karthi, Sri Divya, Arvind Swamy"
                            trailer="https://youtu.be/Ahp840_aCoI?si=y5Ct2UlBekGswYcq"
                            plot="A man's life is changed when he bumps into someone from his hometown in this moving Tamil-language drama; gentle scenes are occasionally punctuated by sporting threat and recollections of violence."
                        />

                        <MobileVerticalCard
                            id="10"
                            name="Raayan"
                            rating="6.5"
                            duration="2h 25min"
                            year="2024"
                            genre="Action | Drama"
                            poster="../assets/Raayan.webp"
                            posterV="../vertical assets/Raayan.jpg"
                            director="Dhanush Kasuthriraja"
                            stars="Dhanush, Aparna Balamurali, Devadarshini Chetan"
                            trailer="https://youtu.be/qQJJWhh-XRo?si=t4ctmk05Kzr8u0k4"
                            plot="A series of unfortunate events lead Raayan, a simpleton to be dragged into the dreaded world of crime and manipulation."
                        />

                        <MobileVerticalCard
                            id="11"
                            name="Sir"
                            rating="8.5"
                            duration="2h 12min"
                            year="2024"
                            genre="Thriller | Mystery"
                            poster="../assets/Sir.jpg"
                            posterV="../vertical assets/Sir.jpg"
                            director="Bose Venkat"
                            stars="Vimal, Chaya Kannan, Siraj S"
                            trailer="https://youtu.be/YZcbTFY28oU?si=VVGRG1kp39Xrs6G9"
                            plot="The people of Mangollai village like Colochi Saami and Saamikannu opposed education for the poor while people like Annadurai and Sivangaanam fought against oppression."
                        />

                        <MobileVerticalCard
                            id="12"
                            name="Family Padam"
                            rating="9.3"
                            duration="2h 11min"
                            year="2024"
                            genre="Comedy | Family | Drama"
                            poster="../assets/Family Padam.avif"
                            posterV="../vertical assets/Family Padam.jpg"
                            director="Selvah Kumar Thirumaaran"
                            stars="Udhay karthick, Vivek Prasanna, Subiksha Kayarohanam"
                            trailer="https://youtu.be/73LH9O4uT0o?si=MTCqLwS_xDffneAq"
                            plot="Being a Middle Class Family That Can Afford Movie Tickets, They Dream of Producing a Whole New Movie to Fulfill Their Younger Son's Wish to Rediscover Himself Which Brings Grave Challenges"
                        />
                        <MobileVerticalCard
                            id="30"
                            name="Indian 2"
                            rating="3.9"
                            duration="3h"
                            year="2024"
                            genre="Action | Drama | Thriller"
                            poster="../assets/Indian 2.avif"
                            posterV="../vertical assets/Indian 2.jpg"
                            director="S.Shankar"
                            stars="Kamal Haasan, Siddharth, Rakul Preet Singh"
                            trailer="https://youtu.be/3bvBUT5pQYY?si=yE25vb7-ZrVwuSss"
                            plot="Senapathy, an ex-freedom fighter turned vigilante who fights against corruption. Senapathy returns to the country to aid a young man who has been exposing corrupt politicians in the country through videos on the internet."
                        />
                        <MobileVerticalCard
                            id= "61"
                            name= "Hot Spot"
                            rating= "7.2"
                            duration="2h 2min"
                            year= "2024"
                            genre="Comedy | Drama"
                            poster= "../assets/Hot Spot.webp"
                            posterV="../vertical assets/Hot Spot.jpg"
                            director="Vignesh Karthick"
                            stars="Ammu Abhirami, Aadhitya Baaskar, Janani Iyer"
                            trailer= "https://youtu.be/CV1ARpxfylY?si=B0d25yAraFLfJCBx"
                            plot= "It features three stories that are humorously evocative and a fourth one that's deeply disturbing."
                        />
                        <MobileVerticalCard
                            id="32"
                            name="Emakku Thozhil Romance"
                            rating="6.0"
                            duration="1h 51min"
                            year="2024"
                            genre="Romance"
                            poster="../assets/Emakku Thozhil Romance.avif"
                            posterV="../vertical assets/Emakku Thozhil Romance.jpg"
                            director="Balaji Kesavan"
                            stars="M.S Bhaskar, Badava Gopi, Avantika Mishra"
                            trailer="https://youtu.be/Jc4MjAGeki4?si=nFhZj9YsN7Um9oBl"
                            plot="Assistant director Umashankar falls for Leo. Misunderstanding arises when Saranya gets pregnant by Prashant. Leo blames Umashankar, causing rift between them"
                        />
                        <MobileVerticalCard
                            id="33"
                            name="Andhagan"
                            rating="6.7"
                            duration="2h 22min"
                            year="2024"
                            genre="Crime | Drama | Music"
                            poster="../assets/Andhagan.avif"
                            posterV="../vertical assets/Andhagan.jpg"
                            director="B.Thiyagarajan"
                            stars="Prasanth, Simran, Priya Anand"
                            trailer="https://youtu.be/SM563_YbcuQ?si=n6U1Kbx2gv-py3ls"
                            plot="A piano player pretending to be visually-impaired, unwittingly becomes entangled in a number of problems as he witnesses the murder of a former film actor."
                        />
                        <MobileVerticalCard
                            id="35"
                            name="Mr Bachchan"
                            rating="3.6"
                            duration="2h 30min"
                            year="2024"
                            genre="Action | Crime | Drama"
                            poster="../assets/Mr Bachchan.avif"
                            posterV="../vertical assets/Mr Bachchan.jpg"
                            director="Harish Shankar"
                            stars="Ravi Teja, Jagapathi Babu, Sidhu Jonnalagadda"
                            trailer="https://youtu.be/XjLYGawD93M?si=LRHsTsLQo-OpTMOf"
                            plot="A straight-laced income tax officer suspended due to his unwavering honesty returns to his hometown and falls in love with a woman who reciprocates his feelings, before he is reinstated and tasked with raiding the home of a powerful man."
                        />

                        <MobileVerticalCard
                            id="36"
                            name="White Rose"
                            rating="4.5"
                            duration="1h 57min"
                            year="2024"
                            genre="Thriller"
                            poster="../assets/White Rose.avif"
                            posterV="../vertical assets/White Rose.jpg"
                            director="K.Rajashekar"
                            stars="Anandhi, Sasilaya, R.K Suresh"
                            trailer="https://youtu.be/W4Yd8Mhpr8A?si=PvWBre4cuny-7MxZ"
                            plot="Divya's daughter is kidnapped, and she teams up with the police to confront the psychopathic abductor. ACP Vetri, connected to the case, grapples with a moral crisis. Can Divya rescue her child and will Vetri find redemption?"
                        />
                        <MobileVerticalCard
                            id="38"
                            name="Garudan"
                            rating="7.1"
                            duration="2h 13min"
                            year="2024"
                            genre="Action"
                            poster="../assets/Garudan.avif"
                            posterV="../vertical assets/Garudan.jpg"
                            director="R.S Durai Senthilkumar"
                            stars="Mime Gopi, Dushyanth Jayaprakash, Samuthrakani"
                            trailer="https://youtu.be/B2yC1jpAYvQ?si=vF6XXz-kZ4MLdqLr"
                            plot="Sokkan, the trusted confidant of childhood friends Aadhi and Karuna.But when his loyalty and self respect is put into test, which would he choose?"
                        />
                    </div>
                </section>


                <section>
                    <h1 className='text-2xl font-semibold pl-4 -z-0'>Trending Movies</h1>
                    <div className='overflow-x-auto flex p-4 pt-6 gap-6 hide-scrollbar touch-pan-x w-full scrollable'>
                        <MobileHorizontalCard
                            id="13"
                            name="Petta Rap"
                            rating="4.5"
                            duration="2h 3min"
                            year="2024"
                            genre="Action | Musical | Comedy"
                            poster="../assets/Petta Rap.jpg"
                            posterV="../vertical assets/Petta Rap.jpg"
                            director="S.J Sinu"
                            stars="Prabhu Deva, Vedhika, Sunny Leone"
                            trailer="https://youtu.be/KRgRu9WIR_s?si=ViANeVQYO-tPOrf9"
                            plot="PETTA RAP tells the love journey of BALA (a middle class man whose ambition is to become the best action hero of Tamil movies.) and JANAKI (a local girl, who becomes a Pop Singer.)"
                        />

                        <MobileHorizontalCard
                            id="14"
                            name="PVT"
                            rating="7.6"
                            duration="2h 13min"
                            year="2024"
                            genre="Mystery | Thriller"
                            poster="../assets/Pogumidam Vegu Thooramillai.jpg"
                            posterV="../vertical assets/P V T.jpg"
                            director="Micheal K Raja"
                            stars="Vimal, Kaunas, Merry Rickets"
                            trailer="https://youtu.be/4PCItPVWNT4?si=tuoxCxK0t-az1O_1"
                            plot="PVT- ''Pogumidam Vegu Thooramillai'' . Revolves around a unique story of transporting a body due to financial issues and the problems entrailed when humanitarian concerns dominate selfishness."
                        />

                        <MobileHorizontalCard
                            id="16"
                            name="Lubber Pandhu"
                            rating="8.2"
                            duration="2h 26min"
                            year="2024"
                            genre="Drama | Comedy | Sport"
                            poster="../assets/Lubber Pandhu.jpg"
                            posterV="../vertical assets/Lubber Pandhu.jpg"
                            director="Tamizharasan Pachamuthu"
                            stars="Devadashini Chetan, Gethu Dinesh, Jensan Diwakar"
                            trailer="https://youtu.be/oP88LHBukW8?si=tUWUcrWrrjyN2LV7"
                            plot="Set against the rural backdrop, explores gully cricket stars Gethu and Anbu's intense rivalry. Anbu's romantic involvement with Gethu's daughter escalates the clash. Their skills and emotions are put to the ultimate test."
                        />

                        <MobileHorizontalCard
                            id="17"
                            name="Bloody Beggar"
                            rating="6.2"
                            duration="2h 14min"
                            year="2024"
                            genre="Comedy | Drama"
                            poster="../assets/Bloody Beggar.webp"
                            posterV="../vertical assets/Bloody Beggar.jpg"
                            director="M.Sivabalan"
                            stars="Kavin, Radha Ravi, Redin Kingsley"
                            trailer="https://youtu.be/L6DqLW0rv-o?si=yMDUvqkJyC-ppLIx"
                            plot="A beggar's life takes an unexpected turn when a misadventure upends his daily routine. Can he navigate the bizarre, witty situations that follow"
                        />
                    </div>
                </section>

                <section>
                    <h1 className='text-2xl font-semibold pl-4 pt-2'>Mystery & Thriller Movies</h1>
                    <div className='overflow-x-auto flex p-4 pt-6 gap-6 hide-scrollbar touch-pan-x w-full scrollable'>

                        <MobileHorizontalCard
                            id="18"
                            name="Black"
                            rating="7.1"
                            duration="2h 30min"
                            year="2024"
                            genre="Mystery | Thriller"
                            poster="../assets/Black.jpg"
                            posterV="../vertical assets/Black.jpg"
                            director="Balasubramani KG"
                            stars="Jiiva, Priya Bhavani Shankar, Vivek Prasanna"
                            trailer="https://youtu.be/By-VTqrdqFI?si=Af1FnpMWawk1M8_5"
                            plot="A young couple move into a serene row house, eager for peace and privacy. A violent storm and unsettling forces unravel their marriage. Vasanth must uncover the truth behind these supernatural occurrences before everything falls apart."
                        />


                        <MobileHorizontalCard
                            id="23"
                            name="Merry Christmas"
                            rating="6.9"
                            duration="2h 24min"
                            year="2024"
                            genre="Drama | Thriller | Mystery"
                            poster="../assets/Merry Christmas2.avif.jpg"
                            posterV="../vertical assets/Merry Christmas.jpg"
                            director="Sriram Raghavan"
                            stars="Katrina Kaif, Vijay Sethupathi, Tinnu Anand"
                            trailer="https://youtu.be/xwm2BIS81CU?si=86MtC1PWlqLorcKV"
                            plot="Two strangers meet on a fateful Christmas Eve. A night of delirious romance turns into a nightmare. Revealing anything more would be a crime."
                        />

                        <MobileHorizontalCard
                            id="45"
                            name="7/G"
                            rating="4.5"
                            duration="2h 20min"
                            year="2024"
                            genre="Mystery"
                            poster="../assets/7G.avif"
                            posterV="../vertical assets/7G.jpg"
                            director="Haroon"
                            stars="Sonia Agarwal, Smruthi Venkat, Siddharth Vipin"
                            trailer="https://youtu.be/Om8du5NjWpY?si=rzDe1InjuNqoqZQu"
                            plot="Rajiv and Varsha, a couple with a five-year-old son, Rahul, moves to a new flat where Varsha faces paranormal activities. Can Varsha fight against supernatural forces to save their dream house, or she decides to leave her house to save her family?"
                        />

                        <MobileHorizontalCard
                            id="20"
                            name="Nirangal Moondru"
                            rating="6.3"
                            duration="2h 2min"
                            year="2024"
                            genre="Thriller | Crime"
                            poster="../assets/Nirangal Moondru2.jpg"
                            posterV="../vertical assets/Nirangal Moondru.jpg"
                            director="Karthick Naren"
                            stars="Dushyanth Jayapraksah, Ammu Abhirami, R.Sarathkumar"
                            trailer="https://youtu.be/cWxRqFy6DhE?si=BbC1Gou5jioofZ60"
                            plot="This Tamil-language crime thriller combines dark themes with twisty storytelling, as the lives of a teacher, a lovelorn student and a troubled filmmaker collide in the search for a missing teenager."
                        />

                    </div>
                </section>



                <section>
                    <h1 className='text-2xl font-semibold pl-6 pt-2 -z-0'>Horror Movies</h1>
                    <div className='overflow-x-auto flex p-4 pt-6 gap-6 hide-scrollbar touch-pan-x w-full scrollable'>

                        <MobileHorizontalCard
                            id="27"
                            name="Sattam En Kaiyil"
                            rating="9.2"
                            duration="2h 4min"
                            year="2024"
                            genre="Crime | Horror | Thriller"
                            poster="../assets/Sattam En Kaiyil.avif"
                            posterV="../vertical assets/Sattam En Kaiyil.jpg"
                            director="Chachi"
                            stars="Sathish, Ajay Raj, Pavel Navageethan"
                            trailer="https://youtu.be/KMkTel_Y314?si=S01FrYnavwokboDG"
                            plot="An accident leads Gowtham to conceal a body in his car. Arrested for drunk driving, his impounded vehicle at the police station holds the hidden corpse. Complications ensue, compelling him to find an escape from the perilous circumstances."
                        />

                        <MobileHorizontalCard
                            id="37"
                            name="Demonte Colony 2"
                            rating="6.7"
                            duration="2h 24min"
                            year="2024"
                            genre="Thriller | Horror"
                            poster="../assets/Demonte Colony 2.avif"
                            posterV="../vertical assets/Demonte Colony 2.jpg"
                            director="R.Ajay Gnanmuthu"
                            stars="VJ Archana, Arulnithi, C.Arunpandian, Priya Bhavani Shankar"
                            trailer="https://youtu.be/NlWgTUFwpIk?si=SdMk60EgfbMEx8s5"
                            plot="A group of friends who return to a cursed location, driven by curiosity and the quest to uncover the truth behind the malevolent spirits that reside there."
                        />


                        <MobileHorizontalCard
                            id="40"
                            name="Aranmanai 4"
                            rating="9.2"
                            duration="2h 28min"
                            year="2024"
                            genre="Thriller | Horror"
                            poster="../assets/Aranmanai 4.avif"
                            posterV="../vertical assets/Aranmanai 4.jpg"
                            director="Sundar C"
                            stars="Sundar C, Tamannah Bhatia, Raashi Kanna"
                            trailer="https://youtu.be/Keck4iVUUdE?si=xcjxDj3aFkR9fMOo"
                            plot="After his sister's suspicious death, a man decides to discover the hidden truth, setting off a chasm for chaos and terror."
                        />


                        <MobileHorizontalCard
                            id="53"
                            name="Oru Kadha Sollata Sir"
                            rating="6.3"
                            duration="2h 10min"
                            year="2024"
                            genre="Horror"
                            poster="../assets/Oru Kadha Sollata Sir.jpg"
                            posterV="../vertical assets/Oru Kadha Sollata Sir.jpg"
                            director="Kash Villanz"
                            stars="Kim Fukazawa, Ben G, Vikadakavi Magen"
                            trailer="https://youtu.be/purgHfbJxR0?si=U8WMC1Lo_3ggPN7y"
                            plot="Three filmmakers start to write a story, but their writings turn into an awful reality. Spirits become intertwined in their tale with their mysterious past, concluding with Yamma, the King of Hell, making an appearance."
                        />

                    </div>
                </section>


                <section>
                    <h1 className='text-2xl font-semibold pl-4 pt-2 -z-0'>Filmly Originals</h1>
                    <div className='overflow-x-auto flex p-4 pt-6 gap-6 hide-scrollbar touch-pan-x w-full scrollable'>
                        <MobileVerticalCard
                            id="19"
                            name="Vaazhai"
                            rating="7.8"
                            duration="2h 14min"
                            year="2024"
                            genre="Drama"
                            poster="../assets/Vaazhai.jpg"
                            posterV="../vertical assets/Vaazhai3.jpg"
                            director="Mari Selvaraj"
                            stars="Dhivya Duraisamy, Kalaiyarasan, J.Sathish Kumar"
                            trailer="https://youtu.be/-NEVvOEPubA?si=NS0RXu7Gp_77vlmv"
                            plot="A twelve-year-old boy, Sivanandhan, his mother, sister, and friend navigate life's challenges, where a plantain tree, Vaazhai, becomes a central presence."
                        />

                        <MobileVerticalCard
                            id="21"
                            name="Martin"
                            rating="2.4"
                            duration="2h 27min"
                            year="2024"
                            genre="Action | Thriller | Drama"
                            poster="../assets/Martin.jpg"
                            posterV="../vertical assets/Martin.jpg"
                            director="A.P Arjun"
                            stars="Dhruva Sarja, Vaibhavi Shandilya, Sriram Reddy"
                            trailer="https://youtu.be/IkjSIfR2MwM?si=ZfzpV_CjWHtmkGvv"
                            plot="A journey of a man discovering himself, finding love and fighting for his motherland. Can he hold the fort on all three gates?"
                        />

                        <MobileVerticalCard
                            id="22"
                            name="Brother"
                            rating="6.3"
                            duration="2h 20min"
                            year="2024"
                            genre="Comedy | Family"
                            poster="../assets/Brother.avif"
                            posterV="../vertical assets/Brother.jpg"
                            director="M. Rajesh"
                            stars="Jayam Ravi, Priyanka Arulmohan, Natarajan Subramanian"
                            trailer="https://youtu.be/rmonLZ1kElw?si=NoP9_2fk91pY70NG"
                            plot="A young man struggles to find his place after moving in with his sister and her in-laws."
                        />

                        <MobileVerticalCard
                            id="24"
                            name="Miss You"
                            rating="5.1"
                            duration="2h 8min"
                            year="2024"
                            genre="Romance | Drama"
                            poster="../assets/Miss You.avif"
                            posterV="../vertical assets/Miss You.jpg"
                            director="N. Rajasekar"
                            stars="S.Rajapandi, V.Jayaprakash, Karunakaran"
                            trailer="https://youtu.be/kMW9SzEJlk4?si=XMw4Z2APicArqGFj"
                            plot="A young man finds himself unexpectedly falling for a woman he initially despised. Their emotional journey explores the depth behind her refusal and the rollercoaster of feelings that unfolds."
                        />
                    </div>
                </section>

                <section>
                    <h1 className='text-2xl font-semibold pl-4 -z-0'>Top Rated on IMDB</h1>
                    <div className='overflow-x-auto flex p-4 pt-6 gap-6 hide-scrollbar touch-pan-x w-full scrollable'>

                        <MobileHorizontalCard
                            id="25"
                            name="Sorgavaasal"
                            duration="2h 15min"
                            rating="6.9"
                            year="2024"
                            genre="Action | Crime | Drama"
                            poster="../assets/Sorgavaasal.jpg"
                            posterV="../vertical assets/Sorgavaasal.jpg"
                            director="Sidharth Vishwanath"
                            stars="RJ Balaji, K.Selvaraghavan, Hakkim Shah"
                            trailer="https://youtu.be/D4-aV9MrN8g?si=OKQjqMCcubx9y6QW"
                            plot="A common man imprisoned in a corrupt system questions whether jails truly rehabilitate or push individuals deeper into crime's abyss."
                        />

                        <MobileHorizontalCard
                            id="26"
                            name="Romeo"
                            rating="6.1"
                            duration="2h 30min"
                            year="2024"
                            genre="Drama | Romance"
                            poster="../assets/Romeo.avif"
                            posterV="../vertical assets/Romeo.jpg"
                            director="Vinayak Vaithiyanthan"
                            stars="Vijay Antony, Yogi Babu, VTV Ganesh"
                            trailer="https://youtu.be/Rt6jFbWx8Mw?si=TAhYf_FTz3TqtJbo"
                            plot="A husband tries to win the love of his wife, who marries him because of familial obligation."
                        />

                        <MobileHorizontalCard
                            id="28"
                            name="Kottukaali"
                            rating="6.5"
                            duration="1h 40min"
                            year="2024"
                            genre="Drama"
                            poster="../assets/Kottukaali.jpg"
                            posterV="../vertical assets/Kottukaali.jpg"
                            director="P.S Vinothraj"
                            stars="Anna Ben, Soori, Nirosha"
                            trailer="https://youtu.be/FwIScvUQwIk?si=v7Hx2j3Kmt_6IhNL"
                            plot="Meena, who loves a man from a lower caste but her family thinks she is possessed and cast the spell out of her."
                        />

                        <MobileHorizontalCard
                            id="29"
                            name="Jolly O Gymkhana"
                            rating="8.6"
                            duration="2h 9min"
                            year="2024"
                            genre="Comedy"
                            poster="../assets/Jolly O Gymkhana.jpg"
                            posterV="../vertical assets/Jolly O Gymkhana.jpg"
                            director="Sakthi Chidambaram"
                            stars="Yaashika Anand, Abhirami, Yogi Babu"
                            trailer="https://youtu.be/WMxcJFRnGrw?si=2qwSab4ilu_KQ732"
                            plot="A Tenkasi-based family finds a dead person, and is forced to go on a journey that makes them reach Kodaikanal."
                        />
                    </div>
                </section>


                <section>
                    <h1 className='text-3xl font-semibold pl-6 pt-4 -z-0'>Filmly on the Spotlight</h1>
                    <div className='overflow-x-auto flex p-4 pt-6 gap-6 hide-scrollbar touch-pan-x w-full scrollable pb-6'>
                        <MobileVerticalCard
                            id="64"
                            name="Deadpool & Wolverine"
                            rating="7.6"
                            duration="2h 8min"
                            year="2024"
                            genre="Action | Adventure | Comedy"
                            poster="../assets/DW.webp"
                            posterV="../vertical assets/DW2.jpg"
                            director="Shawn Levy"
                            stars="Ryan Reynolds, Hugh Jackman, Emma Corrin"
                            trailer="https://youtu.be/73_1biulkYk?si=QDll-vK2IeM5OkgO"
                            plot="Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction."
                        />
                        <MobileVerticalCard
                            id="65"
                            name="Lucky Bhaskar"
                            rating="8.1"
                            duration="2h 50min"
                            year="2024"
                            genre="Crime | Drama | Thriller"
                            poster="../assets/Lucky Bhaskar.webp"
                            posterV="../vertical assets/LB.jpg"
                            director="Venky Atluri"
                            stars="Dulquer Salmaan, Meenkashi Chaudhary, Tinnu Anand"
                            trailer="https://youtu.be/vs6JMdKjoVI?si=M28IlcmBqV-CwzAi"
                            plot="A cash-strapped cashier working at a bank embarks on a risky investment scheme and soon gets drawn into the murky world of money laundering."
                        />
                        <MobileVerticalCard
                            id="66"
                            name="Fallout"
                            rating="8.3"
                            duration="1h"
                            year="2024"
                            genre="Action | Adventure | Drama"
                            poster="../assets/Fall.jpg"
                            posterV="../vertical assets/Fall.jpg"
                            director="Geneva Robertson-Dworet, Graham Wagner"
                            stars="Ella Purnell, Aaron Moten, Walton Goggins"
                            trailer="https://youtu.be/V-mugKDQDlg?si=uUjHJQxQUNRSXdgl"
                            plot="In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits."
                        />
                        <MobileVerticalCard
                            id="67"
                            name="Dune:Part Two"
                            rating="8.5"
                            duration="2h 46min"
                            year="2024"
                            genre="Action | Adventure | Drama"
                            poster="../assets/Dune.jpg"
                            posterV="../vertical assets/Dune.webp"
                            director="Denis Villeneuve"
                            stars="Timothee Chalamet, Zendaya, Rebecca Ferguson"
                            trailer="https://youtu.be/_YUzQa_1RCE?si=U9iD8m5j5y9vBD6M"
                            plot="Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future."
                        />
                    </div>
                    <MobileFooter />
                </section>

            </div>
        </>
    )
}

export default MobileMovies