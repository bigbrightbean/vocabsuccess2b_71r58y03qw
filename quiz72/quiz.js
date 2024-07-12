// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The political rally turned chaotic as a __________ erupted between supporters and protesters.",
    chinese_question: "政治集会变得混乱，支持者和抗议者之间爆发了 __________。",
    answers: [
        { option: "A", answer: "brawl", chinese_answer: "斗殴", chinese_romanization: "dòu'ōu" },
        { option: "B", answer: "negotiation", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
        { option: "C", answer: "seminar", chinese_answer: "研讨会", chinese_romanization: "yántǎohuì" },
        { option: "D", answer: "exhibition", chinese_answer: "展览", chinese_romanization: "zhǎnlǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'brawl' figuratively means a rough or noisy fight or quarrel." +
        "<br><br>" +
        "(B) 'negotiation' means discussion aimed at reaching an agreement." +
        "<br><br>" +
        "(C) 'seminar' means a conference or other meeting for discussion or training." +
        "<br><br>" +
        "(D) 'exhibition' means a public display of works of art or items of interest, held in an art gallery or museum or at a trade fair.",
    chinese_explanation: "(A) '斗殴' 在此语境下意指一场粗暴或喧闹的打斗或争吵。" +
        "<br><br>" +
        "(B) '谈判' 意味着旨在达成协议的讨论。" +
        "<br><br>" +
        "(C) '研讨会' 意味着进行讨论或培训的会议或其他会议。" +
        "<br><br>" +
        "(D) '展览' 意味着在艺术馆、博物馆或贸易展览会上公开展示艺术作品或感兴趣的物品。"
    },
    {
        id: 2,
    question: "Despite the festive atmosphere, a __________ of melancholy lingered in the room as they remembered their departed friend.",
    chinese_question: "尽管气氛欢乐，但房间里依然弥漫着一丝忧郁 __________，他们想起了已故的朋友。",
    answers: [
        { option: "A", answer: "sentiment", chinese_answer: "情感", chinese_romanization: "qínggǎn" },
        { option: "B", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
        { option: "C", answer: "whim", chinese_answer: "奇想", chinese_romanization: "qíxiǎng" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'sentiment' means a view or attitude toward a situation or event; an opinion or feeling." +
        "<br><br>" +
        "(B) 'aversion' means a strong dislike or disinclination." +
        "<br><br>" +
        "(C) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(A) '情感' 意味着对某种情况或事件的看法或态度；意见或感觉。" +
        "<br><br>" +
        "(B) '厌恶' 意味着强烈的厌恶或不情愿。" +
        "<br><br>" +
        "(C) '奇想' 意味着一种突然的愿望或改变主意，尤其是非同寻常或无法解释的。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 3,
    question: "The band's __________ was evident during the performance, as each member seemed to be playing their own tune without regard for the others.",
    chinese_question: "乐队的 __________ 在表演中显而易见，因为每个成员似乎都在演奏自己的曲调而不顾其他人。",
    answers: [
        { option: "A", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
        { option: "B", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
        { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
        { option: "D", answer: "synchronization", chinese_answer: "同步", chinese_romanization: "tóngbù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'discord' figuratively means a lack of harmony or agreement." +
        "<br><br>" +
        "(B) 'unity' means the state of being united or joined as a whole." +
        "<br><br>" +
        "(C) 'harmony' means agreement or concord." +
        "<br><br>" +
        "(D) 'synchronization' means the operation or activity of two or more things at the same time or rate.",
    chinese_explanation: "(A) '不和' 在此语境下意指缺乏和谐或一致。" +
        "<br><br>" +
        "(B) '团结' 意味着联合或作为一个整体的状态。" +
        "<br><br>" +
        "(C) '和谐' 意味着意见一致或和谐。" +
        "<br><br>" +
        "(D) '同步' 意味着两个或多个事物同时或以同样的速度进行的操作或活动。"
    },
    {
        id: 4,
        question: "The grant was a __________ for the research team, providing them with the necessary funds to continue their work.",
        chinese_question: "这笔拨款对研究团队来说是一个 __________，为他们提供了继续工作的必要资金。",
        answers: [
                { option: "A", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
                { option: "B", answer: "windfall", chinese_answer: "意外之财", chinese_romanization: "yìwài zhī cái" },
                { option: "C", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
                { option: "D", answer: "obligation", chinese_answer: "义务", chinese_romanization: "yìwù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'windfall' means a large amount of money or other benefits that are won or received unexpectedly." +
                "<br><br>" +
                "(A) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
                "<br><br>" +
                "(C) 'challenge' means a call to take part in a contest or competition, especially a duel." +
                "<br><br>" +
                "(D) 'obligation' means an act or course of action to which a person is morally or legally bound; a duty or commitment.",
        chinese_explanation: "(B) '意外之财'一词意味着意外获得的大笔钱或其他利益。" +
                "<br><br>" +
                "(A) '阻碍' 意味着对某事或某人提供阻力、延迟或阻碍的事物。" +
                "<br><br>" +
                "(C) '挑战' 意味着参加比赛或竞赛的号召，尤其是决斗。" +
                "<br><br>" +
                "(D) '义务' 意味着一个人道德或法律上的行为或行动过程；责任或承诺。"
    },
    {
        id: 5,
    question: "The chef prides himself on the __________ of his traditional recipes, using only the finest ingredients and methods passed down through generations.",
    chinese_question: "这位厨师以他的传统食谱的 __________ 为傲，只使用最好的食材和代代相传的方法。",
    answers: [
        { option: "A", answer: "authenticity", chinese_answer: "真实性", chinese_romanization: "zhēnshí xìng" },
        { option: "B", answer: "artificiality", chinese_answer: "人工", chinese_romanization: "réngōng" },
        { option: "C", answer: "fraudulence", chinese_answer: "欺诈", chinese_romanization: "qīzhà" },
        { option: "D", answer: "insincerity", chinese_answer: "虚伪", chinese_romanization: "xūwěi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'authenticity' means the quality of being genuine or real." +
        "<br><br>" +
        "(B) 'artificiality' means the quality of being made or produced by human beings rather than occurring naturally." +
        "<br><br>" +
        "(C) 'fraudulence' means deceitfulness or trickery." +
        "<br><br>" +
        "(D) 'insincerity' means the quality of not expressing genuine feelings.",
    chinese_explanation: "(A) '真实性' 意味着真实或真品的质量。" +
        "<br><br>" +
        "(B) '人工' 意味着由人类制造或生产而不是自然发生的质量。" +
        "<br><br>" +
        "(C) '欺诈' 意味着欺骗或欺骗行为。" +
        "<br><br>" +
        "(D) '虚伪' 意味着不表达真实感情的质量。"
    },
    {
        id: 6,
    question: "The rain provided a welcome __________ from the heat, cooling down the temperature significantly.",
    chinese_question: "这场雨带来了欢迎的 __________，显著降低了温度。",
    answers: [
        { option: "A", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
        { option: "B", answer: "reprieve", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "C", answer: "intensification", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "D", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reprieve' means a temporary relief from something, especially from something unpleasant." +
        "<br><br>" +
        "(A) 'punishment' means the infliction or imposition of a penalty as retribution for an offense." +
        "<br><br>" +
        "(C) 'intensification' means the action of becoming or making something stronger or more extreme." +
        "<br><br>" +
        "(D) 'burden' means a load, especially a heavy one.",
    chinese_explanation: "(B) '缓解'一词意味着暂时缓解某事，尤其是某些不愉快的事情。" +
        "<br><br>" +
        "(A) '惩罚' 意味着作为报复性惩罚的处罚或强加。" +
        "<br><br>" +
        "(C) '加剧' 意味着变得更强或更极端的行为。" +
        "<br><br>" +
        "(D) '负担' 意味着负荷，尤其是沉重的负荷。"
    },
    {
        id: 7,
    question: "Despite his charming exterior, he was a __________ who often lied to get what he wanted.",
    chinese_question: "尽管外表迷人，他却是一个 __________，经常撒谎以达到目的。",
    answers: [
        { option: "A", answer: "knave", chinese_answer: "无赖", chinese_romanization: "wúlài" },
        { option: "B", answer: "gentleman", chinese_answer: "绅士", chinese_romanization: "shēnshì" },
        { option: "C", answer: "philanthropist", chinese_answer: "慈善家", chinese_romanization: "císhàn jiā" },
        { option: "D", answer: "mentor", chinese_answer: "导师", chinese_romanization: "dǎoshī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'knave' means a dishonest or unscrupulous man." +
        "<br><br>" +
        "(B) 'gentleman' means a chivalrous, courteous, or honorable man." +
        "<br><br>" +
        "(C) 'philanthropist' means a person who seeks to promote the welfare of others, especially by the generous donation of money to good causes." +
        "<br><br>" +
        "(D) 'mentor' means an experienced and trusted adviser.",
    chinese_explanation: "(A) '无赖' 意味着一个不诚实或不道德的男人。" +
        "<br><br>" +
        "(B) '绅士' 意味着一个彬彬有礼、礼貌或正直的男人。" +
        "<br><br>" +
        "(C) '慈善家' 意味着一个寻求促进他人福利的人，尤其是通过慷慨捐赠钱财来支持好事业的人。" +
        "<br><br>" +
        "(D) '导师' 意味着有经验和值得信赖的顾问。"
    },
    {
        id: 8,
    question: "The financial aid helped to __________ their difficulties during the crisis.",
    chinese_question: "在危机期间，财政援助帮助 __________ 了他们的困难。",
    answers: [
        { option: "A", answer: "abate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "B", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'abate' means to become less intense or widespread." +
        "<br><br>" +
        "(B) 'exacerbate' means to make (a problem, bad situation, or negative feeling) worse." +
        "<br><br>" +
        "(C) 'maintain' means to keep in an existing state." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(A) '缓解' 意味着变得不那么强烈或不那么广泛。" +
        "<br><br>" +
        "(B) '加剧' 意味着使（问题、坏情况或负面情绪）变得更糟。" +
        "<br><br>" +
        "(C) '维持' 意味着保持在现有状态。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
    question: "The athletes entered the __________ to the cheers of thousands of fans.",
    chinese_question: "运动员们在成千上万名粉丝的欢呼声中进入 __________。",
    answers: [
        { option: "A", answer: "stage", chinese_answer: "舞台", chinese_romanization: "wǔtái" },
        { option: "B", answer: "arena", chinese_answer: "竞技场", chinese_romanization: "jìngjì chǎng" },
        { option: "C", answer: "room", chinese_answer: "房间", chinese_romanization: "fángjiān" },
        { option: "D", answer: "field", chinese_answer: "田野", chinese_romanization: "tiányě" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'arena' means a level area surrounded by seats for spectators, in which sports, entertainments, and other public events are held." +
        "<br><br>" +
        "(A) 'stage' means a raised floor or platform, typically in a theater, on which actors, entertainers, or speakers perform." +
        "<br><br>" +
        "(C) 'room' means a part or division of a building enclosed by walls, floor, and ceiling." +
        "<br><br>" +
        "(D) 'field' means an area of open land, especially one planted with crops or pasture, typically bounded by hedges or fences.",
    chinese_explanation: "(B) '竞技场' 意味着一个四周有座位的平坦区域，观众在其中观看体育比赛、娱乐活动和其他公共活动。" +
        "<br><br>" +
        "(A) '舞台' 意味着通常在剧院中的一个抬高的地板或平台，演员、娱乐者或演讲者在其上表演。" +
        "<br><br>" +
        "(C) '房间' 意味着建筑物的一部分或分区，由墙壁、地板和天花板围起来。" +
        "<br><br>" +
        "(D) '田野' 意味着一块开放的土地，通常种植农作物或牧草，通常由树篱或围栏围绕。"
    },
    {
        id: 10,
    question: "The detective considered the elusive thief his __________, as he always managed to escape capture.",
    chinese_question: "侦探认为这个难以捉摸的小偷是他的 __________，因为他总是能逃脱抓捕。",
    answers: [
        { option: "A", answer: "ally", chinese_answer: "同盟", chinese_romanization: "tóngméng" },
        { option: "B", answer: "helper", chinese_answer: "帮手", chinese_romanization: "bāngshǒu" },
        { option: "C", answer: "nemesis", chinese_answer: "竞争对手", chinese_romanization: "jìngzhēng duìshǒu" },
        { option: "D", answer: "assistant", chinese_answer: "助手", chinese_romanization: "zhùshǒu" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'nemesis' means a long-standing rival; an archenemy." +
        "<br><br>" +
        "(A) 'ally' means a state formally cooperating with another for a military or other purpose." +
        "<br><br>" +
        "(B) 'helper' means a person who helps someone else." +
        "<br><br>" +
        "(D) 'assistant' means a person who ranks below a senior person.",
    chinese_explanation: "(C) '竞争对手' 意味着长期存在的对手；主要敌人。" +
        "<br><br>" +
        "(A) '同盟' 意味着正式与另一方合作的国家，目的是军事或其他。" +
        "<br><br>" +
        "(B) '帮手' 意味着帮助某人的人。" +
        "<br><br>" +
        "(D) '助手' 意味着地位低于上级的人。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
