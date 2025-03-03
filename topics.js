// Topics data structure for all subjects and semesters
const topicsData = {
    "english": {
        "first": {
            "title": "First Semester",
            "units": [
                {
                    "title": "Unit 1",
                    "lessons": [
                        {
                            "title": "Reading and Vocabulary",
                            "questions": [
                                {
                                    "question": "What literary device is used in the phrase 'the curtain of night fell'?",
                                    "options": ["Simile", "Metaphor", "Alliteration", "Hyperbole"],
                                    "answer": "Metaphor"
                                },
                                {
                                    "question": "The word 'ambiguous' most closely means:",
                                    "options": ["Clear", "Uncertain", "Definite", "Determined"],
                                    "answer": "Uncertain"
                                }
                            ]
                        },
                        {
                            "title": "Past&Present Tenses&Question Tags",
                            "questions": [
                                {
                                    "question": "Choose the correct present tense: 'She _____ to school every day.'",
                                    "options": ["go", "goes", "going", "went"],
                                    "answer": "goes"
                                },
                                {
                                    "question": "Which is the correct question tag? 'You're coming to the party, _____?'",
                                    "options": ["aren't you", "don't you", "isn't you", "won't you"],
                                    "answer": "aren't you"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Unit 2",
                    "lessons": [
                        {
                            "title": "Reading and Vocabulary",
                            "questions": [
                                {
                                    "question": "What is the main idea of the passage?",
                                    "options": ["Environmental protection", "Economic development", "Cultural heritage", "Political systems"],
                                    "answer": "Environmental protection"
                                }
                            ]
                        },
                        {
                            "title": "Future Forms",
                            "questions": [
                                {
                                    "question": "Which sentence uses the future perfect tense?",
                                    "options": [
                                        "I will study tomorrow.", 
                                        "I will be studying tomorrow.", 
                                        "I will have studied by tomorrow.",
                                        "I am going to study tomorrow."
                                    ],
                                    "answer": "I will have studied by tomorrow."
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Unit 3",
                    "lessons": [
                        {
                            "title": "Reading and Vocabulary",
                            "questions": [
                                {
                                    "question": "What type of text is this passage?",
                                    "options": ["Narrative", "Descriptive", "Persuasive", "Expository"],
                                    "answer": "Expository"
                                }
                            ]
                        },
                        {
                            "title": "Habits&Clauses",
                            "questions": [
                                {
                                    "question": "Which of the following is an adverb clause?",
                                    "options": [
                                        "The book that I read", 
                                        "When the sun rises", 
                                        "The tall building",
                                        "To swim quickly"
                                    ],
                                    "answer": "When the sun rises"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Unit 4",
                    "lessons": [
                        "Reading and Vocabulary",
                        "Narration&Inversion"
                    ]
                }
            ]
        },
        "second": {
            "title": "Second Semester",
            "units": [
                {
                    "title": "Unit 1",
                    "lessons": [
                        "Reading and Vocabulary",
                        "Modal&Related&Articles"
                    ]
                },
                {
                    "title": "Unit 2",
                    "lessons": [
                        "Reading and Vocabulary",
                        "Reported Speach&Reporting Verbs"
                    ]
                },
                {
                    "title": "Unit 3",
                    "lessons": [
                        "Reading and Vocabulary",
                        "The Passive"
                    ]
                },
                {
                    "title": "Unit 4",
                    "lessons": [
                        "Reading and Vocabulary",
                        "Conditionals&Modals"
                    ]
                },
                {
                    "title": "Unit 5",
                    "lessons": [
                        "Reading and Vocabulary",
                        "Modals&Clauses"
                    ]
                }
            ]
        }
    },
    "اللغة العربية": {
        "first": {
            "title": "الفصل الأول",
            "units": [
                {
                    "title": "الوحدة الأولى",
                    "lessons": [
                        "من القيم الإنسانية في القرآن",
                        "اسلوب الطلب وجوابه المجزوم والتشبيه المفرد"
                    ]
                },
                {
                    "title": "الوحدة الثانية",
                    "lessons": [
                        "عمانيات",
                        "صور الفاعل والتشبيه التمثيلي"
                    ]
                },
                {
                    "title": "الوحدة الثالثة",
                    "lessons": [
                        "الزهايمر-الخرف المبكر",
                        "صور المبتدأ والخبر والجملة الخبرية والإنشائية"
                    ]
                },
                {
                    "title": "الوحدة الرابعة",
                    "lessons": [
                        "الإعلام ومشروع النهوض باللغة العربية",
                        "المفعول معه والأمر"
                    ]
                },
                {
                    "title": "الوحدة الخامسة",
                    "lessons": [
                        "التعليم التقني بوابة المستقبل في عالم متغير",
                        "انواع ما والإستفهام"
                    ]
                }
            ]
        },
        "second": {
            "title": "الفصل الثاني",
            "units": [
                {
                    "title": "الوحدة الأولى",
                    "lessons": [
                        "في فتح القدس",
                        "معاني حروف الجر والتشخيص"
                    ]
                },
                {
                    "title": "الوحدة الثانية",
                    "lessons": [
                        "قصة-حفنة تمر",
                        "اسم الفاعل واسم المفعول والطباق والمقابلة"
                    ]
                },
                {
                    "title": "الوحدة الثالثة",
                    "lessons": [
                        "شاعرات من بلدي",
                        "اسم الزمان واسم المكان وجمع التكسير (القلة والكثرة)"
                    ]
                },
                {
                    "title": "الوحدة الرابعة",
                    "lessons": [
                        "من مقامات بديع الزمان الهمذاني",
                        "مصدر المرة ومصدر الهيئة والبحر المتدارك"
                    ]
                },
                {
                    "title": "الوحدة الخامسة",
                    "lessons": [
                        "الذكاء الاصطناعي-عالم جديد",
                        "اسم الآلة"
                    ]
                }
            ]
        }
    },
    "التاريخ": {
        "first": {
            "title": "الفصل الأول",
            "units": [
                {
                    "title": "الأردن في العصور القديمة",
                    "lessons": [
                        "الأردن في العصور الحجرية",
                        "الأردن في العصر الحديدي",
                        "مملكة الأنباط",
                        "مظاهر الحضارة اليونانية في الأردن",
                        "مظاهر الحضارة الرومانية-البيزنطية في الأردن"
                    ]
                },
                {
                    "title": "الأردن في صدر الإسلام",
                    "lessons": [
                        "الأردن في صدر الإسلام",
                        "الأردن في العصر الأموي",
                        "الأردن في العصر العباسي",
                        "الأردن خلال حملات الفرنجة",
                        "الأردن في العصر الأيوبي",
                        "الأردن في العصر المملوكي"
                    ]
                },
                {
                    "title": "الأردن في العصر الحديث",
                    "lessons": [
                        "الأوضاع السياسية والإدارية في الأردن في العهد العثماني",
                        "الأوضاع الإجتماعية والإقتصادية الأردن في العهد العثماني",
                        "الثورة العربية الكبرى",
                        "الأردن في عهد المملكة العربية السورية والحكومات المحلية"
                    ]
                }
            ]
        },
        "second": {
            "title": "الفصل الثاني",
            "units": [
                {
                    "title": "الحياة السياسية في الأردن",
                    "lessons": [
                        "تأسيس الإمارة الأردنية",
                        "استقلال المملكة الأردنية الهاشمية",
                        "تطور الحياة السياسية في الأردن بين عامي (1948-1957)",
                        "تطور الحياة السياسية في الأردن بين عامي (1958-1999)",
                        "الحياة السياسية في الأردن منذ 1999",
                        "الأردن والعلاقات العربية والدولية",
                        "القوات المسلحة الأردنية - الجيش العربي",
                        "الأجهزة الأمنية الأردنية"
                    ]
                },
                {
                    "title": "الحياة الاقتصادية في الأردن",
                    "lessons": [
                        "الحياة الاقتصادية في الأردن بين عامي (1921-1950)",
                        "الحياة الاقتصادية في الأردن بين عامي (1951-1967)",
                        "الحياة الاقتصادية في الأردن بين عامي (1968-1999)",
                        "الحياة الاقتصادية في الأردن منذ عام 1999"
                    ]
                },
                {
                    "title": "الحياة الاجتماعية في الأردن",
                    "lessons": [
                        "الحياة الاجتماعية في الأردن بين عامي (1921-1950)",
                        "الحياة الاجتماعية في الأردن بين عامي (1951-1999)",
                        "الحياة الاجتماعية في الأردن منذ عام 1999"
                    ]
                },
                {
                    "title": "التعليم والثقافة في الأردن",
                    "lessons": [
                        "التعليم العام في الأردن بين عامي (1921-1950)",
                        "التعليم العام في الأردن بين عامي (1951-1987)",
                        "التعليم العام في الأردن بين عامي (1988-2024)",
                        "التعليم العالي والبحث العلمي في الأردن منذ عام 1951",
                        "الحياة الثقافية في الأردن في عهد الإمارة",
                        "الحياة الثقافية في الأردن منذ عام 1946"
                    ]
                },
                {
                    "title": "الأردن والقضية الفلسطينية",
                    "lessons": [
                        "موقف الأردن من القضية الفلسطينية بين عامي (1916-1951)",
                        "موقف الأردن من القضية الفلسطينية منذ عام 1951",
                        "الوصاية والإعمار الهاشمي للمقدسات الدينية في القدس"
                    ]
                }
            ]
        }
    },
    "دين": {
        "first": {
            "title": "الفصل الأول",
            "units": [
                {
                    "title": "الوحدة الأولى",
                    "lessons": [
                        "سورة آل عمران (102-105)",
                        "حديث اتقاء الشبهات",
                        "من صور الضلال",
                        "كرامة الإنسان في الشريعة",
                        "الزواج-مشروعيته ومقدماته",
                        "الجهاد في الإسلام"
                    ]
                },
                {
                    "title": "الوحدة الثانية",
                    "lessons": [
                        "جهود علماء المسلمين في خدمة القرآن",
                        "العزيمة والرخصة",
                        "معركة مؤتة (8 هجري)",
                        "المحرمات من النساء",
                        "التعايش الإنساني",
                        "الحقوق الإجتماعية للمرأة في الإسلام"
                    ]
                },
                {
                    "title": "الوحدة الثالثة",
                    "lessons": [
                        "سورة آل عمران (169-174)",
                        "حديث - رضا الله تعالى",
                        "فتح مكة (8 هجري)",
                        "من خصائص الشريعة - الإيجابية",
                        "شروط صحة عقد الزواج",
                        "الحقوق المالية للمرأة في الإسلام"
                    ]
                },
                {
                    "title": "الوحدة الرابعة",
                    "lessons": [
                        "سورة الروم (21-24)",
                        "مكانة السنة النبوية في التشريع",
                        "مراعاة الأعراف في الشريعة",
                        "حقوق الزوجين",
                        "تنظيم النسل وتحديده",
                        "الأمن الغذائي في الإسلام",
                        "الإسلام والوحدة الوطنية"
                    ]
                }
            ]
        },
        "second": {
            "title": "الفصل الثاني",
            "units": [
                {
                    "title": "الوحدة الأولى",
                    "lessons": [
                        "سورة البقرة (284-286)",
                        "دلائل وجود الله تعالى",
                        "إعجاز القرآن الكريم",
                        "الأمر بالمعروف والنهي عن المنكر",
                        "اليوم الآخر - احداثه وآثار الإيمان به",
                        "الإجتهاد في الإسلام"
                    ]
                },
                {
                    "title": "الوحدة الثانية",
                    "lessons": [
                        "سورة الأعراف (31-34)",
                        "مراعاة المصالح في الشريعة",
                        "جهود علماء المسلمين في الحفاظ على السنة النبوية",
                        "حديث - منهج الإسلام في الحياة",
                        "رسائل النبي الى الملوك والزعماء في عصره",
                        "يوم تبوك (9 هجري)",
                        "الحقوق السياسية للمرأة في الإسلام"
                    ]
                },
                {
                    "title": "الوحدة الثالثة",
                    "lessons": [
                        "سورة الفرقان (63-77)",
                        "الطلاق",
                        "العدة",
                        "الوصية في الشريعة",
                        "الميراث في الشريعة",
                        "من خصائص الشريعة - الوسطية",
                        "مجالات الوقف ودورها في التنمية"
                    ]
                },
                {
                    "title": "الوحدة الرابعة",
                    "lessons": [
                        "حديث - مفهوم الإفلاس بين الدنيا والآخرة",
                        "مقاصد الشريعة",
                        "منهج الإسلام في مكافحة الجريمة",
                        "من وصايا النبي في حجة الوداع",
                        "المسؤولية المجتمعية في الإسلام",
                        "حقوق الإنسان بين الإسلام والإعلان العالمي لحقوق الإنسان"
                    ]
                }
            ]
        }
    }
};

// Function to generate HTML for a semester's content
function generateSemesterContent(subject, semester) {
    const semesterData = topicsData[subject][semester];
    let html = `
        <div id="${subject}-${semester}" class="semester-content">
            <div class="unit-container">
                <div class="unit-title">${semesterData.title}</div>
    `;

    semesterData.units.forEach(unit => {
        html += `
            <div class="section">
                <div class="section-title">${unit.title}</div>
        `;

        unit.lessons.forEach(lesson => {
            html += `
                <div class="section-content" data-subject="${subject}" data-unit="${unit.title}" data-lesson="${lesson.title}">${lesson.title}</div>
            `;
        });

        html += `
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    return html;
}

// Generate content for all subjects and semesters
function generateAllContent() {
    let contentHTML = '';
    
    for (const subject in topicsData) {
        for (const semester in topicsData[subject]) {
            contentHTML += generateSemesterContent(subject, semester);
        }
    }
    
    document.getElementById('content').innerHTML = contentHTML;
}

// Initialize content when the page loads
document.addEventListener('DOMContentLoaded', function() {
    generateAllContent();
    
    // Show the default content (English, First Semester)
    updateContent();
});

// Function to get questions for a specific lesson
function getQuestions(subject, unitTitle, lessonTitle) {
    // Find the active semester
    const activeSemester = document.querySelector('.semester-btn.active').dataset.semester;
    
    // Navigate through the data structure to find matching questions
    try {
        const semesterData = topicsData[subject][activeSemester];
        const unit = semesterData.units.find(u => u.title === unitTitle);
        if (!unit) return null;
        
        const lesson = unit.lessons.find(l => l.title === lessonTitle);
        if (!lesson) return null;
        
        return lesson.questions || [];
    } catch (error) {
        console.error("Error finding questions:", error);
        return [];
    }
}
