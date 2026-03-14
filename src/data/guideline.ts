export interface GuidelineSection {
  id: string;
  title: { th: string; en: string };
  content: { th: string; en: string };
  checklist?: { th: string; en: string }[];
  tags: string[];
}

export const guidelineData: GuidelineSection[] = [
  {
    id: "purpose",
    title: {
      th: "1) จุดประสงค์ของตำแหน่ง Kitchen Hand",
      en: "1) Purpose of the Kitchen Hand Role",
    },
    content: {
      th: `หน้าที่ของ Kitchen Hand คือช่วยให้ครัวทำงานได้อย่างมีประสิทธิภาพ โดยเน้นเรื่องต่อไปนี้\n\n- ล้างจาน อุปกรณ์ และภาชนะต่าง ๆ ให้สะอาดและพร้อมใช้\n- ดูแลพื้นที่ล้างจานให้เป็นระเบียบตลอดเวลา\n- ช่วยงานเตรียมของพื้นฐานตามที่ได้รับมอบหมาย\n- ช่วยเติมของที่จำเป็นตาม station\n- จัดการขยะและความสะอาดทั่วไป\n- ช่วยให้เชฟทำงานง่ายขึ้นและเหนื่อยน้อยลง\n- ทำงานให้ไว เพื่อให้มีเวลาไปช่วยงานอื่นในครัว`,
      en: `The role of the Kitchen Hand is to help the kitchen run efficiently, focusing on the following:\n\n- Wash dishes, equipment, and containers cleanly and have them ready to use.\n- Keep the dishwashing area organized at all times.\n- Assist with basic prep work as assigned.\n- Help restock necessary items at each station.\n- Manage garbage and general cleanliness.\n- Make the chefs' jobs easier and less tiring.\n- Work quickly to free up time to help with other kitchen tasks.`,
    },
    tags: ["purpose", "role", "basics"],
  },
  {
    id: "principles",
    title: {
      th: "2) หลักการทำงานของ Kitchen Hand",
      en: "2) Core Working Principles",
    },
    content: {
      th: `นี่คือหลักสำคัญที่พนักงานใหม่ต้องจำให้ได้\n\n- อย่าปล่อยให้ของกองจนเต็มรถเข็น\n- ล้างให้เร็วและต่อเนื่อง เพื่อให้งานไม่ค้าง\n- ถ้าล้างเร็ว จะมีเวลาไปช่วยงานอื่น เช่น prep, เติมของ, เปลี่ยนขยะ, ช่วยเชฟ\n- ทำงานเร็วได้ แต่ต้องปลอดภัย\n- ถ้าไม่แน่ใจว่าของอะไรต้องรีบล้าง หรือควรทำอะไรต่อ ให้ถามเชฟหรือ senior ทันที\n- ถ้าเห็นอะไรเต็ม สกปรก หรือใกล้หมด ให้จัดการเลย ไม่ต้องรอคนสั่ง\n- พื้นที่ล้างจานต้องสะอาดตลอด เพราะเป็นจุดที่ล้นง่ายที่สุด\n- พยายามทำให้เชฟเหนื่อยน้อยที่สุด โดยช่วยมองงานรอบตัวตลอดเวลา\n- ทำงานเป็นทีม อย่าปล่อยให้คนใดคนหนึ่งเหนื่อยอยู่คนเดียว\n- อย่ารอให้งานมาหาเรา ให้มองหางานและเดินเข้าหางานเอง`,
      en: `These are the core principles new staff must remember:\n\n- Do not let items pile up until the trolley is full.\n- Wash quickly and continuously to prevent backlog.\n- Washing quickly gives you time to help with other tasks (prep, restocking, garbage, helping chefs).\n- Work fast, but safely.\n- If unsure what to wash first or what to do next, ask a chef or senior immediately.\n- If you see something full, dirty, or running low, handle it—don't wait to be told.\n- The dishwashing area must always be clean as it overflows easily.\n- Try to minimize the chefs' fatigue by constantly looking out for tasks around you.\n- Work as a team; don't leave one person struggling alone.\n- Don't wait for work to come to you; look for it and take initiative.`,
    },
    tags: ["principles", "mindset", "teamwork"],
  },
  {
    id: "standards",
    title: {
      th: "3) มาตรฐานการทำงานที่คาดหวัง",
      en: "3) Expected Working Standard",
    },
    content: {
      th: `Kitchen Hand ที่ดีควรมีลักษณะดังนี้\n\n- ล้างไว แต่ยังสะอาด\n- รู้ว่าอะไรควรทำก่อน\n- ไม่ปล่อยให้งานกอง\n- มองงานรอบตัวเป็น\n- ช่วยเติม ช่วยเก็บ ช่วยเชฟได้เมื่อว่าง\n- รักษาความสะอาดของ station ได้ตลอดชิพ\n- สื่อสารกับทีมได้ดีเมื่อมีปัญหาหรือไม่แน่ใจ`,
      en: `A good Kitchen Hand should have the following traits:\n\n- Washes fast but stays clean.\n- Knows what to prioritize.\n- Doesn't let work pile up.\n- Has good situational awareness.\n- Helps restock, clean, and assist chefs when free.\n- Maintains station cleanliness throughout the shift.\n- Communicates well with the team when facing issues or uncertainty.`,
    },
    tags: ["standards", "expectations"],
  },
  {
    id: "morning-duties",
    title: {
      th: "4) Morning Shift Duties",
      en: "4) Morning Shift Duties",
    },
    content: {
      th: `**4.1 เริ่มงานตอนเข้าเช้า**\nเมื่อเริ่มชิพเช้า ให้เริ่มจากเตรียมทุกอย่างให้พร้อมสำหรับทั้งวัน\n\nสิ่งที่ต้องทำ:\n- เปิดเครื่องล้างจานให้พร้อมใช้งาน\n- ถ้ามาเป็นคนแรก ให้ช่วยขนของออเดอร์ที่ร้านสั่งไว้ไปอีกบ้าน\n- หุงข้าวทั้งสองหม้อ\n- ถ้าหม้อข้าวเสร็จแล้ว และมีจังหวะ ให้พยายามหุงเพิ่มอีก 1 หม้อ เผื่อช่วงที่ร้านยุ่ง\n- เข็นรถขยะไปทิ้งตามจุดที่กำหนด\n- นำรถเข็นกลับมาให้ครบตามจำนวนที่เอาไป\n- เตรียมรถเข็นอีก 1 คันไว้ในห้องกลาง\n- เซ็ตอุปกรณ์ที่ใช้สำหรับล้างและเตรียมงานให้พร้อม\n\n**4.2 งานเตรียมของ (Prep)**\nระหว่างชิพเช้า อาจมีงาน prep ที่ต้องช่วยตามหน้าที่ที่ได้รับมอบหมาย หรือช่วยจากของที่มีอยู่ในวันนั้น\n\nของที่มักต้องช่วย prep ได้แก่\n- basil\n- mint\n- papaya\n- lemon\n- onion\n\nถ้ามีงานนอกเหนือจากนี้ และสามารถช่วยได้ ก็ควรช่วย เพราะหน้าที่ของ Kitchen Hand คือช่วยให้ครัวเดินงานได้ไวที่สุด\n\n**4.3 การล้างจานช่วงเช้า**\nชิพเช้าต้องเน้น “เคลียร์พื้นที่” และ “เตรียมความพร้อมให้ครัว”\n\nแนวทางการล้าง:\n- เริ่มจากล้างของที่อยู่ด้านล่างก่อน เพื่อให้มีพื้นที่มากขึ้น เช่น ถาดเทย์ หรืออุปกรณ์ชิ้นใหญ่ที่กินพื้นที่\n- พยายามล้างคราบซอสออกก่อนเข้าเครื่องทุกครั้ง\n- อย่าทำให้น้ำในเครื่องเปลี่ยนสี เพราะจะทำให้จานออกมาเลอะและต้องเสียเวลาล้างซ้ำ\n- ควรล้างของที่ใช้งานบ่อยก่อน เช่น จานผัด, จานขาวของหน้าบ้าน\n- พยายามเหลือจานไว้อย่างละ 1 เซ็ต เพื่อให้หน้าบ้านวางจานได้ถูกต้อง\n- ถ้าจานไม่เยอะแล้ว ให้สลับไปล้างช้อน เพื่อให้หน้าบ้านสามารถเอาไปเช็ดต่อได้\n\n**4.4 สิ่งที่ควรทำเมื่อว่างในชิพเช้า**\nอย่ารอให้มีคนสั่งอย่างเดียว ถ้าว่างให้มองหางานที่ช่วยลดภาระของทีม\n\nตัวอย่างงาน:\n- เตรียม spare อุปกรณ์ต่าง ๆ\n- เติมกล่อง take away\n- เติมกล่องถุงมือ\n- เติมกระดาษทิชชู่\n- ถ้าว่างจริง ๆ สามารถเดินไปหยิบกล่อง 1000 ml หรือฝาตาม station มาล้างได้เลย ไม่ต้องรอให้เชฟเดินเอามาให้\n- เปลี่ยนถุงขยะตาม station แล้วนำไปทิ้ง\n- ถ้ามีอะไรที่ช่วยได้เพิ่มเติม ก็ช่วยได้เลย\n\n**4.5 เป้าหมายของชิพเช้า**\nชิพเช้าควรพยายามทำงานให้เร็วและเคลียร์งานให้เยอะที่สุด เพื่อไม่ให้ไปรบกวนชิพถัดไป\n\nเป้าหมายคือ:\n- พื้นที่ล้างโล่ง\n- ของใช้งานหลักพร้อม\n- ข้าวพร้อม\n- ขยะไม่ค้าง\n- ของ prep ที่ได้รับมอบหมายเสร็จตามเวลา\n- ของจำเป็นถูกเติมไว้เรียบร้อย\n\n**4.6 ก่อนจบชิพเช้า**\nก่อนปิดชิพตอนเช้า ให้ตรวจความเรียบร้อยดังนี้\n- ล้างงานที่ค้างให้ได้มากที่สุด\n- เช็กความสะอาดของพื้นที่ล้างจาน\n- เปลี่ยนถุงขยะถ้าจำเป็น\n- นำกล่องกระดาษของทั้งสองบ้านไปทิ้งตามจุดที่กำหนด\n- ดูว่าชิพถัดไปสามารถรับงานต่อได้ง่าย ไม่เริ่มจากความรก`,
      en: `**4.1 Starting the Morning Shift**\nWhen starting the morning shift, prepare everything for the day.\n\nTasks:\n- Turn on the dishwasher.\n- If you are the first to arrive, help transport ordered goods to the other house.\n- Cook rice in both pots.\n- If the rice is done and you have time, try to cook 1 more pot for busy periods.\n- Take the garbage trolleys to the designated disposal area.\n- Bring back all the trolleys you took.\n- Prepare 1 extra trolley in the middle room.\n- Set up washing and prep equipment.\n\n**4.2 Prep Work**\nDuring the morning shift, you may need to assist with assigned prep work or help with whatever is available that day.\n\nCommon prep items:\n- Basil\n- Mint\n- Papaya\n- Lemon\n- Onion\n\nIf there is other work and you can help, do so. The Kitchen Hand's job is to make the kitchen run as fast as possible.\n\n**4.3 Morning Dishwashing**\nThe morning shift must focus on "clearing space" and "preparing the kitchen."\n\nWashing guidelines:\n- Start by washing items at the bottom to create more space (e.g., large trays or bulky equipment).\n- Always rinse off sauce stains before putting items in the machine.\n- Do not let the water in the machine change color, as it will make dishes dirty and require re-washing.\n- Wash frequently used items first (e.g., stir-fry plates, white front-of-house plates).\n- Try to leave at least 1 set of plates so the front-of-house knows where to place them.\n- When there are fewer plates, switch to washing spoons so the front-of-house can polish them.\n\n**4.4 What to Do When Free in the Morning**\nDon't just wait for orders. If free, look for tasks that reduce the team's burden.\n\nExamples:\n- Prepare spare equipment.\n- Restock takeaway boxes.\n- Restock glove boxes.\n- Restock paper towels.\n- If truly free, grab 1000ml boxes or lids from stations to wash—don't wait for chefs to bring them.\n- Change garbage bags at stations and dispose of them.\n- Help with anything else you can.\n\n**4.5 Morning Shift Goals**\nThe morning shift should aim to work fast and clear as much work as possible so it doesn't spill over to the next shift.\n\nGoals:\n- Dishwashing area is clear.\n- Main equipment is ready.\n- Rice is ready.\n- No leftover garbage.\n- Assigned prep is done on time.\n- Necessary items are restocked.\n\n**4.6 Before Ending the Morning Shift**\nBefore closing the morning shift, check the following:\n- Wash as much leftover work as possible.\n- Check the cleanliness of the dishwashing area.\n- Change garbage bags if necessary.\n- Dispose of cardboard boxes from both houses at the designated spot.\n- Ensure the next shift can easily take over and doesn't start in a mess.`,
    },
    tags: ["morning", "duties", "prep", "rice", "garbage"],
  },
  {
    id: "evening-duties",
    title: {
      th: "5) Evening Shift Duties",
      en: "5) Evening Shift Duties",
    },
    content: {
      th: `**5.1 เริ่มงานตอนเย็น**\nชิพเย็นจะรับงานต่อจากชิพเช้า โดยส่วนใหญ่เน้นงานล้างเป็นหลัก และช่วย support service ให้ลื่นที่สุด\n\nสิ่งที่ควรทำ:\n- ล้างงานต่อจากที่ชิพเช้าทำไว้\n- คุมไม่ให้ของกองระหว่าง service\n- เน้นงานล้างเป็นหลัก\n- ถ้าว่างสามารถช่วยสต็อกของได้ เช่น ถั่ว, พริก\n\n**5.2 การทำงานของชิพเย็น**\nชิพเย็นมักเป็นช่วงที่งานเยอะและต่อเนื่อง จึงต้องทำงานแบบมี flow\n\nสิ่งที่ต้องเน้น:\n- ล้างอย่างต่อเนื่อง อย่ารอให้ของกอง\n- ของที่ต้องใช้เร็วต้องล้างก่อน\n- สื่อสารกันในทีมว่าตอนนี้อะไรใกล้หมด\n- ช่วยเชฟเท่าที่จังหวะงานล้างเปิด\n- ถ้าว่างให้มองงานอื่นทันที อย่าปล่อยเวลาเสียเปล่า\n\n**5.3 ถ้าชิพเย็นมี 2 คน**\nถ้ามี 2 คน ต้องช่วยกัน ไม่ใช่ให้คนหนึ่งล้างอย่างเดียว อีกคนยืนรอ\n\nคนที่ 1 หน้าที่หลัก:\n- ล้างจาน\n- คุม flow ของพื้นที่ล้าง\n- แยกของ\n- รีบเคลียร์ของที่จำเป็นต้องใช้ก่อน\n- อย่าปล่อยให้รถเข็นเต็ม\n\nคนที่ 2 หน้าที่หลัก:\n- ช่วยเติมจาน\n- ตักข้าว\n- หุงข้าวให้เชฟ\n- ช่วยดูของที่จะหมด\n- ถ้าว่างช่วยเชฟ prep เช่น หั่นมะนาว\n- สลับมาช่วยล้าง เพื่อไม่ให้ใครเหนื่อยคนเดียว\n\nหลักการทำงานร่วมกัน:\n- ต้องทำงานเป็นทีม\n- สลับกันล้าง\n- สลับกันช่วยงานเชฟ\n- คนที่ว่างต้องรีบมองว่าอะไรควรช่วยต่อ\n- อย่าปล่อยให้มีคนเหนื่อยอยู่ฝ่ายเดียว\n\n**5.4 เรื่องการเบรกในชิพเย็น**\nถ้าเป็นไปได้ ช่วงเริ่มงาน ถ้ายังไม่ยุ่ง ให้สลับกันเบรกเลย\n\nเหตุผล:\n- กลางคืนมักยาวและยุ่ง\n- ถ้าไม่รีบเบรกตอนต้น อาจไม่มีจังหวะแล้วทำให้กลับบ้านช้า\n- ควรเบรกตอนที่ร้านยังไม่ peak\n\nหลักคือ: เบรกตอนยังไม่ยุ่ง อย่ารอจนงานมาหนักแล้วค่อยพัก\n\n**5.5 การจัดการขยะช่วงเย็น**\nถ้าถังขยะเกินครึ่งถัง และเริ่มเข้าสู่ช่วงประมาณ 5–6 โมงเย็น ให้คิดล่วงหน้าเลยว่า ถ้าคืนนี้จะยุ่ง ควรเปลี่ยนถุงขยะใหม่ก่อน\n\nแนวทาง:\n- ใช้ถังใหม่ที่เตรียมไว้ตรงกลาง สลับกับอันเก่า\n- อย่ารอให้เต็มตอนช่วงพีก เพราะจะทำให้งานสะดุด\n- Kitchen Hand ควรมองล่วงหน้า ไม่ใช่รอให้ปัญหาเกิดก่อน\n\n**5.6 งานปิดครัวตอนเย็น**\nช่วง closing ต้องช่วยกันเก็บงานให้เรียบร้อย เพื่อให้วันถัดไปเริ่มง่าย\n\nสิ่งที่ต้องทำ:\n- ให้คนที่สองตักข้าวในหม้อใส่ tray หรือภาชนะที่กำหนด\n- เช็กความสะอาดตาม station ต่าง ๆ\n- เช็ดโต๊ะ\n- เติมข้าวใส่ถังให้เรียบร้อย\n- ทำความสะอาดพื้นรอบเครื่อง\n- ทำความสะอาดด้านในเครื่องล้างจาน\n- เดรนน้ำออกจากเครื่อง\n- ทำความสะอาดเดรน 2 รอบ\n- เช็ดกำแพงบริเวณ station ล้างจาน\n- เช็กว่าพื้นที่พร้อมสำหรับวันถัดไป`,
      en: `**5.1 Starting the Evening Shift**\nThe evening shift takes over from the morning shift, focusing primarily on washing and supporting service to run smoothly.\n\nTasks:\n- Continue washing from where the morning shift left off.\n- Prevent items from piling up during service.\n- Focus primarily on washing.\n- If free, help restock items like peanuts and chilies.\n\n**5.2 Evening Shift Workflow**\nThe evening shift is usually busy and continuous, requiring a good workflow.\n\nFocus on:\n- Washing continuously; don't wait for piles to form.\n- Wash urgently needed items first.\n- Communicate with the team about what's running low.\n- Help chefs when there's a gap in dishwashing.\n- If free, look for other tasks immediately; don't waste time.\n\n**5.3 If There Are 2 Kitchen Hands**\nIf there are 2 people, work together. One shouldn't just wash while the other stands around.\n\nPerson 1 (Main Duties):\n- Wash dishes.\n- Control the flow of the dishwashing area.\n- Sort items.\n- Quickly clear urgently needed items.\n- Don't let the trolley get full.\n\nPerson 2 (Main Duties):\n- Help restock plates.\n- Scoop rice.\n- Cook rice for chefs.\n- Keep an eye on items running low.\n- If free, help chefs prep (e.g., slicing lemons).\n- Switch to help wash so no one gets too tired alone.\n\nTeamwork Principles:\n- Work as a team.\n- Take turns washing.\n- Take turns helping chefs.\n- The free person must quickly look for the next task.\n- Don't leave one person doing all the hard work.\n\n**5.4 Breaks During Evening Shift**\nIf possible, take turns taking breaks early in the shift before it gets busy.\n\nReasons:\n- Nights are usually long and busy.\n- If you don't break early, you might not get a chance, leading to a late finish.\n- Break before the restaurant peaks.\n\nRule: Break when it's not busy. Don't wait until the workload is heavy.\n\n**5.5 Evening Garbage Management**\nIf the bin is over half full around 5–6 PM, anticipate that it will be busy tonight and change the bag early.\n\nGuidelines:\n- Swap the old bin with a new one prepared in the middle.\n- Don't wait for it to fill up during peak hours, as it will disrupt the workflow.\n- Kitchen Hands should anticipate issues, not wait for them to happen.\n\n**5.6 Evening Kitchen Closing**\nDuring closing, work together to tidy up so the next day starts easily.\n\nTasks:\n- Person 2 scoops rice from the pot into designated trays/containers.\n- Check cleanliness at various stations.\n- Wipe tables.\n- Refill rice bins.\n- Clean the floor around the machine.\n- Clean the inside of the dishwasher.\n- Drain the water from the machine.\n- Clean the drains twice.\n- Wipe the walls around the dishwashing station.\n- Ensure the area is ready for the next day.`,
    },
    tags: ["evening", "duties", "closing", "teamwork", "breaks"],
  },
  {
    id: "priorities",
    title: {
      th: "6) ลำดับความสำคัญในการล้าง",
      en: "6) Washing Priorities",
    },
    content: {
      th: `Kitchen Hand ต้องรู้ว่าอะไรควรล้างก่อน ไม่ใช่ล้างตามใจหรือหยิบอะไรมาก่อนก็ทำก่อน\n\n**ล้างก่อน**\n- จานผัด\n- จานขาวของหน้าบ้าน\n- ของที่ใช้บ่อย\n- ของที่ต้องใช้ต่อทันที\n- ของที่จำเป็นกับ service\n\n**ล้างสลับเมื่อมีเวลา**\n- ช้อน\n- อุปกรณ์เล็ก\n- ของที่หน้าบ้านต้องใช้ต่อ เช่น ช้อนเอาไปเช็ด\n\n**ของใหญ่ที่ควรเคลียร์เร็ว**\n- ถาดเทย์\n- ของที่วางอยู่ด้านล่าง\n- ของที่กินพื้นที่\n- ของที่ทำให้รถเข็นเต็ม\n\nเหตุผล:\nถ้าพื้นที่โล่ง จะทำงานต่อได้ง่าย ถ้ารถเข็นไม่เต็ม งานจะไม่ตัน`,
      en: `Kitchen Hands must know what to wash first, not just wash whatever they feel like or grab first.\n\n**Wash First**\n- Stir-fry plates\n- White front-of-house plates\n- Frequently used items\n- Items needed immediately\n- Items essential for service\n\n**Wash in Between When You Have Time**\n- Spoons\n- Small equipment\n- Items front-of-house needs next (e.g., spoons for polishing)\n\n**Large Items to Clear Quickly**\n- Large trays\n- Items placed at the bottom\n- Bulky items\n- Items that fill up the trolley\n\nReason:\nIf the area is clear, it's easier to keep working. If the trolley isn't full, the workflow won't get bottlenecked.`,
    },
    tags: ["priorities", "washing", "speed"],
  },
  {
    id: "work-fast",
    title: {
      th: "7) Work Fast and Stay Ahead",
      en: "7) Work Fast and Stay Ahead",
    },
    content: {
      th: `นี่คือ mindset สำคัญของ Kitchen Hand\n\nKitchen Hand ควรล้างจานให้เร็วและต่อเนื่อง เพื่อไม่ให้งานกองใน station ล้างจาน\nถ้าคุมงานล้างได้ จะมีเวลาไปช่วยงานอื่นในครัว และทำให้ทั้งทีมทำงานง่ายขึ้น\n\nสิ่งที่ต้องจำ:\n- ยิ่งล้างเร็ว ยิ่งมีเวลาไปช่วยอย่างอื่น\n- ถ้าปล่อยให้ของกอง จะเสียทั้งเวลาและแรง\n- คนที่ล้างไว ไม่ได้แค่ทำ station ตัวเองดี แต่ช่วยทั้งครัวได้มากกว่า\n- งานล้างต้องไม่ใช่แค่ “ทำไปเรื่อย ๆ” แต่ต้อง “คุมให้อยู่”\n\nตัวอย่างงานอื่นที่ควรไปช่วยเมื่อคุมงานล้างได้แล้ว:\n- prep พื้นฐาน\n- เติมกล่อง\n- เติมถุงมือ\n- เติมทิชชู่\n- ล้างฝา / กล่อง 1000 ml\n- เปลี่ยนขยะ\n- ช่วยเชฟหั่นของเล็ก ๆ เช่น มะนาว\n- ดูว่าของไหนใกล้หมด`,
      en: `This is a crucial mindset for a Kitchen Hand.\n\nKitchen Hands should wash dishes quickly and continuously to prevent pile-ups at the dishwashing station.\nIf you control the washing workflow, you'll have time to help with other kitchen tasks, making the whole team's job easier.\n\nThings to remember:\n- The faster you wash, the more time you have to help elsewhere.\n- Letting things pile up wastes both time and energy.\n- A fast washer doesn't just manage their own station well; they help the entire kitchen more.\n- Washing isn't just "doing it continuously"; it's about "staying in control."\n\nExamples of tasks to help with once washing is under control:\n- Basic prep\n- Restocking boxes\n- Restocking gloves\n- Restocking paper towels\n- Washing lids / 1000ml boxes\n- Changing garbage\n- Helping chefs slice small items (e.g., lemons)\n- Checking what's running low`,
    },
    tags: ["mindset", "speed", "efficiency", "proactive"],
  },
  {
    id: "cleaning-standards",
    title: {
      th: "8) มาตรฐานความสะอาดในการล้าง",
      en: "8) Cleaning Standards",
    },
    content: {
      th: `เพื่อให้จานออกมาสะอาดและไม่เสียเวลาทำซ้ำ ต้องทำตามนี้\n\n- ล้างคราบซอสออกก่อนเข้าเครื่อง\n- อย่าให้น้ำในเครื่องสกปรกจนเปลี่ยนสี\n- ถ้าเครื่องสกปรก จานจะออกมาเลอะ\n- อย่าปล่อยให้จานสะอาดปนกับของสกปรก\n- อย่าให้ของกองลงพื้น\n- เช็ดพื้นที่ให้สะอาดเสมอ\n- พยายามรักษาความสะอาดระหว่างงาน ไม่ใช่รอไปทำตอนปิดชิพอย่างเดียว`,
      en: `To ensure dishes come out clean and avoid wasting time re-washing, follow these steps:\n\n- Rinse off sauce stains before putting items in the machine.\n- Do not let the water in the machine get so dirty that it changes color.\n- If the machine is dirty, the dishes will come out dirty.\n- Do not mix clean dishes with dirty ones.\n- Do not let items pile up on the floor.\n- Always wipe the area clean.\n- Try to maintain cleanliness while working, not just waiting until closing to clean up.`,
    },
    tags: ["cleaning", "hygiene", "standards"],
  },
  {
    id: "supporting-chef",
    title: {
      th: "9) การช่วยเชฟและการมองงาน",
      en: "9) Supporting the Chef and Seeing the Work",
    },
    content: {
      th: `Kitchen Hand ที่ดีต้องช่วยเชฟได้โดยไม่ต้องรอให้สั่งทุกอย่าง\n\nสิ่งที่ควรมอง:\n- มีอะไรใกล้หมดไหม\n- มีกล่องหรือฝาที่ล้างรอได้ไหม\n- ขยะเต็มหรือยัง\n- จานหน้าบ้านใกล้หมดไหม\n- ช้อนพอหรือไม่\n- ข้าวพร้อมหรือยัง\n- เชฟมีอะไรที่เราช่วย prep เล็ก ๆ ได้ไหม\n\nหลักคือ:\nถ้าเห็นแล้วช่วยได้ ให้ช่วย\nถ้าไม่แน่ใจ ให้ถาม\nอย่าปล่อยให้เชฟต้องเดินมาทำงานที่เราทำแทนได้`,
      en: `A good Kitchen Hand must be able to help the chef without waiting to be told everything.\n\nWhat to look out for:\n- Is anything running low?\n- Are there boxes or lids that can be washed and kept ready?\n- Is the garbage full?\n- Are front-of-house plates running low?\n- Are there enough spoons?\n- Is the rice ready?\n- Does the chef have small prep tasks we can help with?\n\nRule of thumb:\nIf you see it and can help, help.\nIf you're unsure, ask.\nDon't make the chef walk over to do a task you could have done for them.`,
    },
    tags: ["support", "chef", "awareness"],
  },
  {
    id: "avoid",
    title: {
      th: "10) สิ่งที่พนักงานใหม่ควรหลีกเลี่ยง",
      en: "10) What New Staff Should Avoid",
    },
    content: {
      th: `- ปล่อยให้ของกองเต็มรถเข็น\n- ล้างช้าเกินไปจนไม่มีเวลาไปช่วยงานอื่น\n- ไม่ล้างซอสออกก่อนเข้าเครื่อง\n- ปล่อยให้น้ำในเครื่องสกปรกมาก\n- รอให้คนสั่งทุกอย่าง\n- เห็นของใกล้หมดแต่ไม่เติม\n- เห็นขยะใกล้เต็มแต่ไม่เปลี่ยน\n- ทิ้งของใหญ่ไว้กินพื้นที่นานเกินไป\n- ไม่ถามเมื่อไม่แน่ใจ\n- ทำงานคนเดียวแบบไม่สื่อสารกับทีม`,
      en: `- Letting items pile up until the trolley is full.\n- Washing too slowly, leaving no time to help with other tasks.\n- Not rinsing off sauce before putting items in the machine.\n- Letting the water in the machine get very dirty.\n- Waiting to be told to do everything.\n- Seeing items running low but not restocking them.\n- Seeing the garbage almost full but not changing it.\n- Leaving large items taking up space for too long.\n- Not asking when unsure.\n- Working alone without communicating with the team.`,
    },
    tags: ["avoid", "mistakes", "new staff"],
  },
  {
    id: "advice",
    title: {
      th: "11) คำแนะนำสำหรับพนักงานใหม่",
      en: "11) Advice for New Staff",
    },
    content: {
      th: `ถ้าเพิ่งเริ่มงาน ให้จำสิ่งนี้ก่อนเป็นอันดับแรก\n\n- ล้างให้ไวและต่อเนื่อง\n- ของที่ใช้บ่อยต้องมาก่อน\n- อย่าปล่อยให้รถเข็นเต็ม\n- ช่วยมองงานรอบตัวเสมอ\n- เห็นอะไรใกล้หมด ให้เติม\n- เห็นอะไรสกปรก ให้ทำ\n- ถ้าไม่แน่ใจ ให้ถามเชฟหรือ senior ทันที\n- เป้าหมายไม่ใช่แค่ล้างเสร็จ แต่คือช่วยให้ทั้งครัวทำงานง่ายขึ้น`,
      en: `If you are just starting, remember this first and foremost:\n\n- Wash quickly and continuously.\n- Frequently used items come first.\n- Don't let the trolley get full.\n- Always look out for tasks around you.\n- If you see something running low, restock it.\n- If you see something dirty, clean it.\n- If unsure, ask a chef or senior immediately.\n- The goal isn't just to finish washing, but to make the whole kitchen run easier.`,
    },
    tags: ["advice", "new staff", "summary"],
  },
  {
    id: "morning-checklist",
    title: {
      th: "12) Morning Shift Checklist",
      en: "12) Morning Shift Checklist",
    },
    content: {
      th: ``,
      en: ``,
    },
    checklist: [
      { th: "เปิดเครื่องล้างจาน", en: "Turn on the dishwasher" },
      { th: "ถ้ามาคนแรก ช่วยขนของออเดอร์ไปอีกบ้าน", en: "If first to arrive, help transport orders to the other house" },
      { th: "หุงข้าวทั้งสองหม้อ", en: "Cook rice in both pots" },
      { th: "ถ้าข้าวเสร็จและมีจังหวะ หุงเพิ่มอีก 1 หม้อ", en: "If rice is done and there's time, cook 1 more pot" },
      { th: "เอารถขยะไปทิ้งและเอากลับมาให้ครบ", en: "Take garbage trolleys out and bring them all back" },
      { th: "เตรียมรถเข็นอีก 1 คันไว้ในห้องกลาง", en: "Prepare 1 extra trolley in the middle room" },
      { th: "เซ็ตอุปกรณ์ล้างและเตรียมงาน", en: "Set up washing and prep equipment" },
      { th: "ช่วย prep ตามที่ได้รับมอบหมาย", en: "Help with assigned prep work" },
      { th: "ล้างของด้านล่างก่อนเพื่อเคลียร์พื้นที่", en: "Wash items at the bottom first to clear space" },
      { th: "ล้างซอสออกก่อนเข้าเครื่อง", en: "Rinse off sauce before putting in the machine" },
      { th: "เน้นล้างจานผัด / จานขาว / ของใช้บ่อย", en: "Focus on stir-fry plates / white plates / frequently used items" },
      { th: "สลับล้างช้อนเมื่อจานเริ่มน้อย", en: "Switch to washing spoons when plates are low" },
      { th: "เติมของจำเป็นเมื่อว่าง", en: "Restock necessary items when free" },
      { th: "เปลี่ยนถุงขยะตาม station", en: "Change garbage bags at stations" },
      { th: "นำกล่องกระดาษของทั้งสองบ้านไปทิ้งก่อนจบชิพ", en: "Dispose of cardboard boxes from both houses before ending shift" },
    ],
    tags: ["checklist", "morning"],
  },
  {
    id: "evening-checklist",
    title: {
      th: "13) Evening Shift Checklist",
      en: "13) Evening Shift Checklist",
    },
    content: {
      th: ``,
      en: ``,
    },
    checklist: [
      { th: "รับงานต่อจากชิพเช้า", en: "Take over from the morning shift" },
      { th: "เน้นงานล้างเป็นหลัก", en: "Focus primarily on washing" },
      { th: "อย่าปล่อยให้ของกอง", en: "Don't let items pile up" },
      { th: "ถ้าว่างช่วยเติมของ เช่น ถั่ว พริก", en: "If free, restock items like peanuts and chilies" },
      { th: "ถ้ามี 2 คน ให้แบ่งงานและสลับกันช่วย", en: "If 2 people, divide tasks and take turns helping" },
      { th: "คนที่ว่างช่วยเชฟ prep ได้ เช่น หั่นมะนาว", en: "The free person can help chefs prep (e.g., slicing lemons)" },
      { th: "ถ้ายังไม่ยุ่ง ให้สลับกันเบรกก่อน", en: "If not busy yet, take turns taking breaks early" },
      { th: "ถังขยะเกินครึ่งและใกล้พีก ให้เปลี่ยนก่อน", en: "If bin is over half full near peak time, change it early" },
      { th: "ช่วยกันดูของที่ใกล้หมด", en: "Help keep an eye on items running low" },
      { th: "ตอน closing เช็ดโต๊ะ / เช็ก station / จัดการข้าว", en: "At closing: wipe tables / check stations / manage rice" },
      { th: "เดรนน้ำเครื่องล้างจาน", en: "Drain water from the dishwasher" },
      { th: "ล้างเดรน 2 รอบ", en: "Clean the drains twice" },
      { th: "เช็ดกำแพงแถว station ล้างจาน", en: "Wipe walls around the dishwashing station" },
      { th: "ทำความสะอาดพื้นและพื้นที่รอบเครื่อง", en: "Clean the floor and area around the machine" },
    ],
    tags: ["checklist", "evening"],
  },
  {
    id: "closing-checklist",
    title: {
      th: "14) Closing Checklist",
      en: "14) Closing Checklist",
    },
    content: {
      th: `ก่อนเลิกงาน ต้องแน่ใจว่า`,
      en: `Before leaving work, ensure that:`,
    },
    checklist: [
      { th: "จานและอุปกรณ์ไม่มีค้างเยอะ", en: "Not many dishes or equipment left unwashed" },
      { th: "รถเข็นไม่ล้น", en: "Trolleys are not overflowing" },
      { th: "ถุงขยะถูกเปลี่ยนและนำไปทิ้งแล้ว", en: "Garbage bags are changed and disposed of" },
      { th: "กล่องกระดาษถูกนำไปทิ้งแล้ว", en: "Cardboard boxes are disposed of" },
      { th: "เครื่องล้างจานถูกปิดและทำความสะอาดแล้ว", en: "Dishwasher is turned off and cleaned" },
      { th: "เดรนถูกล้าง 2 รอบแล้ว", en: "Drains are cleaned twice" },
      { th: "โต๊ะสะอาด", en: "Tables are clean" },
      { th: "พื้นสะอาด", en: "Floors are clean" },
      { th: "ผนังแถว station ล้างจานสะอาด", en: "Walls around the dishwashing station are clean" },
      { th: "ข้าวถูกจัดการเรียบร้อย", en: "Rice is properly managed/stored" },
      { th: "ของจำเป็นสำหรับชิพถัดไปพร้อม", en: "Necessary items for the next shift are ready" },
    ],
    tags: ["checklist", "closing"],
  },
  {
    id: "shortest-summary",
    title: {
      th: "15) สรุปสั้นที่สุดของงานนี้",
      en: "15) Shortest Summary of This Role",
    },
    content: {
      th: `Kitchen Hand ที่ดีคือคนที่\n\n- ล้างเร็ว\n- ล้างสะอาด\n- ไม่ปล่อยให้งานกอง\n- มองงานเป็น\n- เติมของเป็น\n- ช่วยเชฟเป็น\n- รักษาความสะอาดได้\n- ทำให้ครัวทำงานง่ายขึ้นทั้งทีม`,
      en: `A good Kitchen Hand is someone who:\n\n- Washes fast\n- Washes clean\n- Doesn't let work pile up\n- Sees what needs to be done\n- Knows how to restock\n- Knows how to help the chef\n- Maintains cleanliness\n- Makes the kitchen run easier for the whole team`,
    },
    tags: ["summary", "quick"],
  }
];
