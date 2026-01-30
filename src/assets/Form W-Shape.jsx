const data = {
  // data = types of steel
  question: "Select Steel Type",
  types: [
    { Angle: {} },
    { Channel: {} },
    { Pipe: {} },
    { HSS: {} },
    {
      W_Shape: {
        material_grades: {
          question: "Select Material Grade",
          types: [
            "A36",
            "A572 GR 42",
            "A572 GR 50",
            "A572 GR 55",
            "A572 GR 60",
            "A572 GR 65",
            "A992",
            "A588",
            "A913 GR 50",
            "A913 GR 60",
            "A913 GR 65",
            "A913 GR 70",
            "A709 GR 36",
            "A709 GR 50",
            "A709 GR 50W",
            "A709 GR HPS 50W",
            "A709 GR HPS 70W",
            "A690",
          ],
        },
        sizes: {
          question: "Select Size",
          types: [
            {
              size1: "W44",
              size2: [408, 368, 335, 290, 262, 230],
            },
            {
              size1: "W40",
              size2: [
                655, 593, 503, 431, 397, 372, 362, 324, 297, 277, 249, 215, 199,
                392, 331, 327, 294, 278, 264, 235, 211, 183, 167, 149,
              ],
            },
            {
              size1: "W36",
              size2: [
                925, 853, 802, 723, 652, 529, 487, 441, 395, 361, 330, 302, 282,
                262, 247, 231, 387, 350, 318, 286, 256, 232, 210, 194, 182, 170,
                160, 150, 135,
              ],
            },
            {
              size1: "W33",
              size2: [
                387, 354, 318, 291, 263, 241, 221, 201, 169, 152, 141, 130, 118,
              ],
            },
            {
              size1: "W30",
              size2: [
                391, 357, 326, 292, 261, 235, 211, 191, 173, 148, 132, 124, 116,
                108, 99, 90,
              ],
            },
            {
              size1: "W27",
              size2: [
                539, 368, 336, 307, 281, 258, 235, 217, 194, 178, 161, 146, 129,
                114, 102, 94, 84,
              ],
            },
            {
              size1: "W24",
              size2: [
                370, 335, 306, 279, 250, 229, 207, 192, 176, 162, 146, 131, 117,
                104, 103, 94, 84, 76, 68, 62, 55,
              ],
            },
            {
              size1: "W21",
              size2: [
                275, 248, 223, 201, 182, 166, 147, 132, 122, 111, 101, 93, 83,
                73, 68, 62, 55, 48, 57, 50, 44,
              ],
            },
            {
              size1: "W18",
              size2: [
                311, 283, 258, 234, 211, 192, 175, 158, 143, 130, 119, 106, 97,
                86, 76, 71, 65, 60, 55, 50, 46, 40, 35,
              ],
            },
            {
              size1: "W16",
              size2: [100, 89, 77, 67, 57, 50, 45, 40, 36, 31, 26],
            },
            {
              size1: "W14",
              size2: [
                873, 808, 730, 665, 605, 550, 500, 455, 426, 398, 370, 342, 311,
                283, 257, 233, 211, 193, 176, 159, 145, 132, 120, 109, 99, 90,
                82, 74, 68, 61, 53, 48, 43, 38, 34, 30, 26, 22,
              ],
            },
            {
              size1: "W12",
              size2: [
                336, 305, 279, 252, 230, 210, 190, 170, 152, 136, 120, 106, 96,
                87, 79, 72, 65, 58, 53, 50, 45, 40, 35, 30, 26, 22, 19, 16, 14,
              ],
            },
            {
              size1: "W10",
              size2: [
                112, 100, 88, 77, 68, 60, 54, 49, 45, 39, 33, 30, 26, 22, 19,
                17, 15, 12,
              ],
            },
            {
              size1: "W8",
              size2: [67, 58, 48, 40, 35, 31, 28, 24, 21, 18, 15, 13, 10],
            },
            {
              size1: "W6",
              size2: [25, 20, 15, 16, 12, 9, 8.5],
            },
            {
              size1: "W5",
              size2: [19, 16],
            },
            {
              size1: "W4",
              size2: [13],
            },
          ],
        },
        member_length: {
          question: "Select Member Length",
          types: [
            "< 5FT",
            "5-10FT",
            "10-15FT",
            "15-20FT",
            "20-25FT",
            "25-30FT",
            "30-35FT",
            "35-40FT",
            "40-45FT",
            "45-50FT",
            "50-55FT",
            "55-60FT",
            "> 60FT",
          ],
        },
        quantity: { question: "Select Quantity", input: true },
        cost: { question: "Select Cost", input: true },
        ends: { question: "Select End Type", types: ["Square", "Bevel"] },
        coating: {
          question: "Select Coating",
          types: [
            "Bare Steel",
            "Epoxy",
            "Polyurethane",
            "Alkyd",
            "Zinc",
            "HDG",
            "Electro-Galvanized",
            "Powder",
            "FBE",
            "Coal Tar Epoxy",
            "Paint",
          ],
        },
        source: {
          question: "Select Source",
          types: ["Domestic", "International"],
        },
        mill_location: { question: "Select Mill Location", input: true },
        lead_time: {
          question: "Select Lead Time",
          types: [
            "< 1FT",
            "1-2FT",
            "2-3FT",
            "3-4FT",
            "4-5FT",
            "5-6FT",
            "6-7FT",
            "7-8FT",
            "8-FT",
            "> 8FT",
          ],
          attachment: { question: "Select Attachment", input: true },
        },
      },
    },
  ],
};

export default data;
