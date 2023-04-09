from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# from django.views.decorators.http import require_POST
# @require_POST
@csrf_exempt
def ussd_callback(request):
    """Main entry point for USSD requests."""
    # Get the input from the user
    if request.method == 'POST':
        session_id = request.POST.get("sessionId")
        phone_number = request.POST.get("phoneNumber")
        service_code = request.POST.get("serviceCode")
        text = request.POST.get("text")
        response_text = ""

        if text == "":
            # User is at the first level
            response_text = "CON Welcome to Healthverse USSD Service.What do you want to access?\n"
            response_text += "1. First aid procedures\n"
            response_text += "2. Medical Articles\n"
            response_text += "3. Contact a professional\n"
            response_text += "4. Access my health records\n"
        
            # User is at the second level
        elif text == "1":
            # User selected option 1
            response_text = "CON Available first aid procedures 1\n"
            response_text += "1. Headache \n"
            response_text += "2. Stomachache \n"
            response_text += "3. Pneumonia \n"
            response_text += "4. Diarrhoea \n"
            response_text += "5. Cholera \n"
            response_text += "6. Pregnancy complication \n"
        elif text == "1*1":
            response_text= "END Some remedies to alleviate headaches, including resting in a quiet, dark room, applying heat or cold to the affected area, massaging the temples, neck, and shoulders, staying hydrated, taking over-the-counter pain relievers, and trying herbal remedies. However, if the headache is severe or accompanied by other symptoms such as fever, vomiting, or confusion, it's best to seek medical attention immediately..\n"
        elif text == "1*2":
            response_text= "END Three types of tea that may help alleviate stomach pain: ginger tea, peppermint tea, and chamomile tea. Ginger tea has anti-inflammatory properties, while peppermint tea can ease digestive issues, and chamomile tea has anti-inflammatory properties that may soothe an upset stomach. It's important to note that consulting with a healthcare professional is recommended if the stomach ache persists or worsens as these remedies may not work for everyone..\n"
        elif text == "1*3":
            response_text= "END Several remedies for treating pneumonia symptoms, including getting plenty of rest, staying hydrated, using a humidifier, practicing good hygiene, and trying natural remedies like honey and garlic. However, it's important to seek prompt medical attention if pneumonia is suspected, as it is a serious illness. These remedies should be used in addition to, not instead of, medical treatment.\n"
        elif text == "1*4":
            response_text= "END These are some of the remedies to alleviate diarrhoea symptoms, including staying hydrated, consuming bland foods, probiotics, ginger, apple cider vinegar, and turmeric. However, it's important to avoid dairy products, caffeine, alcohol, and spicy foods, as these can worsen diarrhea symptoms by irritating the digestive system.\n"
        elif text == "1*5":
            response_text= "END Using oral rehydration solution, coconut water, ginger, and lemon juice to treat cholera at home. The oral rehydration solution is the most crucial treatment, as it helps to replace fluids and electrolytes lost during cholera. Coconut water, ginger, and lemon juice are natural remedies that can also aid in boosting the immune system, reducing inflammation and fighting off the bacteria that cause cholera. However, medical treatment should not be substituted by home remedies, and immediate medical attention is necessary if cholera is suspected.\n"
        elif text == "1*6":
            response_text= "END These are some of the home remedies for pregnancy health issues. Ginger tea or candies and small, frequent meals can help relieve nausea and vomiting. Elevating the head of the bed and avoiding spicy foods can reduce heartburn, and chamomile tea can also help. Drinking water, avoiding salty foods, and elevating feet can reduce swelling. For constipation, eating fiber-rich foods, drinking water, staying physically active, and drinking warm liquids like lemon water or herbal tea can help. These remedies can supplement medical treatment, but consult with a healthcare professional for persistent or severe symptoms.\n"
        elif text == "2":
            # User selected option 2
            response_text = "CON These are some of the health articles 2\n"
            response_text += "1. Malaria\n"
            response_text += "2. Pneumonia\n"
            response_text += "3. Diarrhoea \n"
            response_text += "4. Cholera\n"
            response_text += "5. Protein energy malnutrition \n"
            response_text += "6. Monkeypox \n"
            response_text += "7. Pregnancy and childbirth \n"
        elif text == "2*1":
            response_text= "END Malaria is a life-threatening disease transmitted by infected mosquito bites. In 2016, there were an estimated 216 million cases and 445,000 deaths. Symptoms usually appear 10-15 days after the bite and include fever, headache, and chills. Treatment includes artemisinin-based combination therapy, while the RTS,S/AS01 vaccine provides partial protection against P. falciparum malaria in young children. Prevention methods include insecticide-treated mosquito nets and indoor residual spraying. Malaria is most prevalent in the WHO AFRO Region, where it represented 90% of malaria cases and 91% of malaria deaths in 2016./n"
        elif text == "2*2":
            response_text= "END Pneumonia is a major disease in Africa, with millions of cases and thousands of deaths each year. It is a serious lung disease that causes inflammation and fluid or pus buildup in the alveoli, making breathing difficult. Bacteria and viruses in the air we inhale are the leading causes of pneumonia, and even those with good health can be overpowered by the germs./n"
        elif text == "2*3":
            response_text= "END Diarrhea is a gastrointestinal infection often caused by bacteria and viruses. You can also contract it upon ingesting contaminated food or drinking water. Diarrhea, if left untreated for a while, could lead to other related conditions, including irritable bowel disorder, persistent infection, inflammatory bowel disease, among others.Diarrhea is said to be predominant in Africa as a result of many factors, including scarcity of safe water, unkempt environment, inadequate awareness, suboptimal breastfeeding, zinc, and vitamin A deficiency, to mention but a few./n"
        elif text == "2*4":
            response_text= "END Cholera is a severe diarrhoeal infection caused by Vibrio cholerae that can lead to death if left untreated. It causes between 1.3 to 4.0 million cases and 21,000 to 143,000 deaths every year globally. Symptoms include vomiting, dehydration, rapid heart rate, and muscle cramps, and it can kill within hours if left untreated. Prevention and control can be achieved through clean water and food, proper hygiene conditions, and access to basic services. Regular handwashing, safe food preparation, and vaccination with Oral Cholera Vaccines (OCV) are essential in cholera control. The primary treatment is oral rehydration salts (ORS) and antibiotics./n"
        elif text == "2*5":
            response_text= "END Protein-Energy malnutrition (PEM) is another health problem in Africa. It is associated with a significant percentage of childhood mortality (children below age 5) in the continent. More importantly, it is very unfortunate that the current economic condition of Africa is not even helping situations in the sense that only a few groups of people can afford the balanced, 3 square meal in the nation./n"
        elif text == "2*6":
            response_text= "END Monkeypox is a rare viral disease caused by a double-stranded DNA virus belonging to the Poxviridae family. It presents with symptoms similar to smallpox but is less severe. It was first discovered in 1958 in monkeys used for research, and the first human case was reported in 1970 in the Democratic Republic of the Congo. The virus has two clades, with clade I being more severe and prevalent in central Africa, while clade II is less severe. The disease is transmitted through direct contact with infected animals, fomites, or respiratory droplets from infected individuals. Symptoms in humans include fever, headache, muscle aches, and rash, with a case fatality rate of 3-6%./n"
        elif text == "2*7":
            response_text= "END Complications of pregnancy include physical and mental conditions that affect the health of the pregnant or postpartum person, their baby, or both. Physical and mental conditions that can lead to complications may start before, during, or after pregnancy. It’s very important for anyone who may become pregnant to get health care before, during, and after pregnancy to lower the risk of pregnancy complications.Before you get pregnant, eat healthy, stay at a healthy weight, take care of your mental health, avoid tobacco products, and limit or avoid alcohol. Preconception health care can also help you be as healthy as possible before you become pregnant./n"
        elif text == "3":
            # User selected option 3
            response_text = "CON What type of practitioner are you seeking?\n"
            response_text += "1. General doctor\n"
            response_text += "2. Paedetrician\n"
            response_text += "3. Gynacologist \n"
            response_text += "4. Dentist \n"
            response_text += "5. Suergon \n"
        elif text == "3*1":
            response_text = "CON Welcome to Healthverse Doc-Find\n"
            response_text = "CON PLease input your County\n"
            location = request.POST.get('location')
            if location == 'Nairobi''Kisumu':
                response_text += "1. See on screen \n"
                response_text += "2. Receive via SMS\n"
        elif text == "4":
            # User selected option 3
            response_text = "CON Welcome to Healthverse medical records\n"
            response_text = "CON PLease input your PIN\n"
            personal_id = request.POST.get('personal_id')
            if personal_id == '1234':
                # response_text = "CON Choose option\n"
                response_text += "1. See on screen \n"
                response_text += "2. Receive via SMS\n"
        else:
            response_text = "END Invalid input\n"
        return HttpResponse(response_text)
    # elif len(words) == 3:
    #     # User is at the third level
    #     if words[2] == "1":
    #         # User selected sub-option 1
    #         response_text = "END You selected sub-option 1\n"
    #     elif words[2] == "2":
    #         # User selected sub-option 2
    #         response_text = "END You selected sub-option 2\n"
    #     else:
    #         response_text = "END Invalid input\n"
    # else:
    #     response_text = "END Invalid input\n"

    # Send the response
        
