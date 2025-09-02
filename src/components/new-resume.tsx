// components/MyDocument.tsx
import { Document, Page, Text, View, StyleSheet, Link, Image } from "@react-pdf/renderer";
import { getImagePrefix } from "../../utils/utils";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f0f4f8",
    padding: 20,
    fontFamily: "Helvetica",
    color: "#1f2937",
  },
  container: {
    flexDirection: "row",
    gap: 15,
  },
  left: {
    width: "35%",
    paddingRight: 10,
  },
  right: {
    width: "65%",
    paddingLeft: 10,
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderBottomStyle: "solid",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000", // Tailwind blue-600
  },
  title: {
    fontSize: 14,
    marginTop: 2,
    color: "#1f2937",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#00000",
    marginBottom: 10,
    objectFit: "cover",
  },
  section: {
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#00000",
  },
  text: {
    fontSize: 10,
    marginBottom: 3,
  },
  list: {
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 10,
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontSize: 7,
  },
});

export function MyDocument() {
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Ar Kar Moe</Text>
        <Text style={styles.title}>WEB DEVELOPER</Text>
        <Link style={styles.link} src="https://github.com/ArKar524/">
          GitHub: https://github.com/ArKar524/
        </Link>
      </View>

      {/* Two-column container */}
      <View style={styles.container}>
        {/* Left Column */}
        <View style={styles.left}>
          {/* Profile Image */}
          <Image
            style={styles.profileImage}
            src={`${getImagePrefix()}image/resume/resumeimg.png`}
          />

          {/* Personal Profile */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Profile</Text>
            <Text style={styles.text}>DOB: 08/Feb/2004</Text>
            <Text style={styles.text}>NRC No.: 5/yamapa(n)161086</Text>
            <Text style={styles.text}>Marital Status: Single</Text>
          </View>

          {/* Personal Qualifications */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.list}>HTML, CSS, JavaScript, Tailwind, Bootstrap</Text>
            <Text style={styles.list}>Vue, React, React Native, Next.js, Nuxt.js</Text>
            <Text style={styles.list}>PHP, Laravel, Livewire, Alpine, TypeScript</Text>
            <Text style={styles.list}>Git & GitHub</Text>
          </View>

          {/* Contacts */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contacts</Text>
            <Text style={styles.text}>Email: arkarmoe.dev@gamil.com</Text>
            <Text style={styles.text}>Phone: 09885537008</Text>
            <Text style={styles.text}>Address: ThaManig, MaYangone Twp, Yangon</Text>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.right}>
          {/* About Me */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Me</Text>
            <Text style={styles.text}>
              To become a professional programmer with an opportunity to apply my skills & knowledge in programming technology and to achieve a responsible & challenging career.
            </Text>
          </View>

          {/* Courses & Trainings */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Courses & Trainings</Text>
            <Text style={styles.text}>Professional Fullstack Developer Course - Hornbill IT</Text>
            <Text style={styles.text}>One Stop & Full-Stack Development With OJT - Hornbill IT by Sr. Yae Myint Soe (System Analyst & Team Lead)</Text>
          </View>

          {/* Experiences & Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experiences & Projects</Text>
            <Text style={styles.text}>Participated in the One-Stop Fullstack Development OJT program.</Text>
            <Text style={styles.text}>Contributed to projects like ERP systems, POS, and job portals.</Text>
            <Text style={styles.text}>Gained practical experience in development and teamwork under a senior system analyst.</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
};

export default MyDocument;
