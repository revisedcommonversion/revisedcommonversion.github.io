/*
  The Holy Bible: Revised Common Version
  Copyright (c) 2023 William Masopust
  http://www.revisedcommonversion.com
  The source code of the RCV text is available at http://source.rcv.xyz.

  This project and the accompanying materials are made available under the
  terms of the Eclipse Public License 2.0 which is available at
  https://www.eclipse.org/legal/epl-2.0/.

*/

$(document).ready(function(){
  var verses = new Array();
  verses[0] = 'Whether therefore you eat or drink, or whatever you do, do all to the glory of God. -1st Corinthians 10:11';
  verses[1] = 'If any man speaks, let him speak as the oracles of God. If any man ministers, let him do it as of the ability which God gives so that in all things God may be glorified through Jesus Christ, to whom be praise and dominion forever and ever. Amen. -1st Peter 4:11';
  verses[2] = 'To him be glory in the church by Christ Jesus throughout all generations, forever and ever. Amen. -Ephesians 3:21';
  verses[3] = 'For from him, by him, and to him are all things, to whom be glory forever. Amen. -Romans 11:36';
  verses[4] = 'O give thanks to the LORD, for he is good. For his mercy endures forever. -1st Chronicles 16:34';
  verses[5] = 'In everything give thanks, for this is the will of God in Christ Jesus concerning you. -1st Thessalonians 5:18';
  verses[6] = 'And let the peace of God rule in your hearts, to which you are also called in one body, and be thankful. -Colossians 3:15';
  verses[7] = 'And whatever you do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him. -Colossians 3:17';
  verses[8] = 'Continue in prayer and watch in the same with thanksgiving... -Colossians 4:2';
  verses[9] = 'For by grace you are saved through faith, and that not of yourselves. It is the gift of God. -Ephesians 2:8';
  verses[10] = 'But now in Christ Jesus you who formerly were far off are made near by the blood of Christ. -Ephesians 2:13';
  verses[11] = 'Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with all spiritual blessings in heavenly places in Christ... -Ephesians 1:3';
  verses[12] = 'Every good gift and every perfect gift is from above and comes down from the Father of lights, with whom there is no variableness, neither shadow of turning. -James 1:17';
  verses[13] = 'For this is how God loved the world: he gave his only-begotten Son, so that whoever believes in him, should not perish, but have eternal life. -John 3:16';
  verses[14] = 'Peace I leave with you. My peace I give to you. I do not give to you as the world gives. Do not let your heart be troubled, neither let it be afraid. -John 14:27';
  verses[15] = 'Jesus says to him, "I am the way, the truth, and the life. No man comes to the Father, but by me." -John 14:6';
  verses[16] = 'Be anxious for nothing, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. -Philippians 4:6';
  verses[17] = 'I can do all things through Christ who strengthens me. -Philippians 4:13';
  verses[18] = 'Blessed be the LORD because he has heard the voice of my supplications. -Psalm 28:6';
  verses[19] = 'The LORD is my strength and my shield. My heart trusted in him, and I am helped; therefore, my heart greatly rejoices, and with my song I will praise him. -Psalm 28:7';
  verses[20] = 'I will bless the LORD at all times. His praise shall continually be in my mouth. -Psalm 34:1';
  verses[21] = 'O taste and see that the LORD is good. Blessed is the man who trusts in him. -Psalm 34:8';
  verses[22] = 'The LORD redeems the soul of his servants, and none of those who trust in him shall be desolate. -Psalm 34:22';
  verses[23] = 'Enter into his gates with thanksgiving and into his courts with praise. Be thankful to him and bless his name. -Psalm 100:4';
  verses[24] = 'For the LORD is good. His mercy is everlasting and his truth endures to all generations. -Psalm 100:5';
  verses[25] = 'Blessed be the LORD God of Israel from everlasting to everlasting. And let all the people say, "Amen." Praise the LORD. -Psalm 106:48';
  verses[26] = 'Let the redeemed of the LORD say so, whom he has redeemed from the hand of the enemy... -Psalm 107:2';
  verses[27] = 'Therefore, being justified by faith, we have peace with God through our Lord Jesus Christ... -Romans 5:1';
  verses[28] = 'But God commends his love toward us, in that while we were yet sinners, Christ died for us. -Romans 5:8';
  verses[29] = 'For the wages of sin is death, but the gift of God is eternal life in Jesus Christ our Lord. -Romans 6:23';
  verses[30] = 'Let us come before his presence with thanksgiving and make a joyful noise to him with psalms. -Psalm 95:2';
  verses[31] = 'For the LORD is a great God and a great King above all gods. -Psalm 95:3';
  verses[32] = 'O come, let us worship and bow down. Let us kneel before the LORD our maker. -Psalm 95:6';
  verses[33] = 'Therefore, receiving a kingdom which cannot be moved, let us have grace, by which we may serve God acceptably with reverence and godly fear... -Hebrews 12:28';
  verses[34] = 'For which cause we do not faint, but though our outward man is wasted, yet the inward man is renewed day by day. -2nd Corinthians 4:16';
  verses[35] = 'O give thanks to the LORD, for he is good. For his mercy endures forever. -Psalm 118:1';
  verses[36] = 'The LORD is my strength and song and has become my salvation. -Psalm 118:14';
  verses[37] = 'You are my God, and I will praise you. My God, I will exalt you. -Psalm 118:28';
  verses[38] = 'Blessed are those who keep his testimonies, who seek him with the whole heart. -Psalm 119:2';
  verses[39] = 'Blessed are you, O LORD. Teach me your statutes. -Psalm 119:12';
  verses[40] = 'I will meditate in your precepts and have respect for your ways. -Psalm 119:15';
  verses[41] = 'I will delight myself in your statutes. I will not forget your word. -Psalm 119:16';
  verses[42] = 'Open my eyes so that I may behold wondrous things out of your law. -Psalm 119:18';
  verses[43] = 'Your testimonies are also my delight and my counselors. -Psalm 119:24';
  verses[44] = 'Teach me, O LORD, the way of your statutes, and I shall keep it to the end. -Psalm 119:33';
  verses[45] = 'Give me understanding, and I shall keep your law. I shall even observe it with my whole heart. -Psalm 119:34';
  verses[46] = 'Let your mercies come also to me, O LORD, even your salvation, according to your word. -Psalm 119:41';
  verses[47] = 'Your hands have made me and fashioned me. Give me understanding so that I may learn your commandments. -Psalm 119:73';
  verses[48] = 'Forever, O LORD, your word is settled in heaven. -Psalm 119:89';
  verses[49] = 'Your word is a lamp to my feet and a light to my path. -Psalm 119:105';
  verses[50] = 'You are my hiding place and my shield. I hope in your word. -Psalm 119:114';
  verses[51] = 'The entrance of your words gives light. It gives understanding to the simple. -Psalm 119:130';
  verses[52] = 'You are righteous, O LORD, and your judgments are upright. -Psalm 119:137';
  verses[53] = 'Your word is true from the beginning. Every one of your righteous judgments endures forever. -Psalm 119:160';
  verses[54] = 'For the LORD gives wisdom. Out of his mouth comes knowledge and understanding. -Proverbs 2:6';
  verses[55] = 'Trust in the LORD with all your heart, and do not lean on your own understanding. -Proverbs 3:5';
  verses[56] = 'For whom the LORD loves he corrects, even as a father [corrects] the son in whom he delights. -Proverbs 3:12';
  verses[57] = 'Keep your heart with all diligence, for out of it flows the source of life. -Proverbs 4:23';
  verses[58] = 'The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is understanding. -Proverbs 9:10';
  verses[59] = 'Pleasant words are as a honey-comb, sweet to the soul and health to the bones. -Proverbs 16:24';
  verses[60] = 'The law of the LORD is perfect, converting the soul. The testimony of the LORD is sure, making the simple wise. -Psalm 19:7';
  verses[61] = 'The grass withers, the flower fades, but the word of our God shall stand forever. -Isaiah 40:8';
  verses[62] = 'A new heart I will also give you, and a new spirit I will put within you. And I will take away the stony heart out of your flesh and give you a heart of flesh. -Ezekiel 36:26';
  verses[63] = 'Therefore, the law was our school-master to bring us to Christ so that we might be justified by faith. -Galatians 3:24';
  verses[64] = 'In this is love, not that we loved God, but that he loved us and sent his Son to be the propitiation for our sins. -1st John 4:10';
  verses[65] = 'And one cried to another and said, "Holy, holy, holy is the LORD of hosts. The whole earth is full of his glory." -Isaiah 6:3';
  verses[66] = 'By the word of the LORD the heavens were made, and all the host of them by the breath of his mouth. -Psalm 33:6';
  verses[67] = 'Your mercy, O LORD, is in the heavens and your faithfulness reaches to the clouds. -Psalm 36:5';
  verses[68] = 'In the beginning was the Word, and the Word was with God, and the Word was God. -John 1:1';
  verses[69] = '"All who the Father gives me shall come to me, and he who comes to me, I will in no way reject." -John 6:37';
  verses[70] = 'Then Jesus spoke again to them, saying, "I am the light of the world. He who follows me shall not walk in darkness, but shall have the light of life." -John 8:12';
  verses[71] = 'The LORD is great and greatly to be praised, and his greatness is unsearchable. -Psalm 145:3';
  verses[72] = '"My sheep hear my voice, and I know them. They follow me, and I give eternal life to them. They shall never perish, and no one shall pluck them out of my hand." -John 10:27-28';
  verses[73] = 'Blessed is the man whom you choose and cause to approach you so that he may dwell in your courts. We shall be satisfied with the goodness of your house, even of your holy temple. -Psalm 65:4';
  verses[74] = 'All the paths of the LORD are mercy and truth to those who keep his covenant and his testimonies. -Psalm 25:10';
  
  var verse = Math.floor(Math.random() * verses.length);
  
  $("#random-verse").text(verses[verse]);
});
