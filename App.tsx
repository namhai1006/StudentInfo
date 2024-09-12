import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const student = {
    maSV: 'DE170317',
    lop: 'SE17C',
    hoTen: 'Lê Nam Hải',
    queQuan: 'Quảng Nam',
    diaChi: '268 Nguyễn Công Trứ',
    diemManh: ['Kiên nhẫn', 'Làm việc nhóm', 'Tư duy logic'],
    diemYeu: ['Thiếu tự tin', 'Ngại giao tiếp'],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hình ảnh trên đầu */}
      <Image
        source={require('./assets/z5272301727810_99ff3024f4880625478854b951d846ab.jpg')} 
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Thông tin sinh viên</Text>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Mã SV:</Text>
          <Text style={styles.value}>{student.maSV}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Lớp:</Text>
          <Text style={styles.value}>{student.lop}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Họ tên:</Text>
          <Text style={styles.value}>{student.hoTen}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Quê quán:</Text>
          <Text style={styles.value}>{student.queQuan}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.label}>Địa chỉ:</Text>
          <Text style={styles.value}>{student.diaChi}</Text>
        </View>

        <Text style={styles.label}>Điểm mạnh:</Text>
        {student.diemManh.map((strength, index) => (
          <Text key={index} style={styles.listItem}>
            • {strength}
          </Text>
        ))}

        <Text style={styles.label}>Điểm yếu:</Text>
        {student.diemYeu.map((weakness, index) => (
          <Text key={index} style={styles.listItem}>
            • {weakness}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa', // Màu nền xung quanh
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Để hình ảnh tròn
    marginBottom: 20,
    borderColor: '#00796b',
    borderWidth: 3, // Tạo viền quanh hình ảnh
  },
  card: {
    backgroundColor: '#ffffff', // Màu nền trong card
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderColor: '#004d40',
    borderWidth: 1, // Tạo viền card
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004d40', // Màu chữ tiêu đề
    marginBottom: 20,
    textAlign: 'center',
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00796b', // Màu chữ label
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#004d40', // Màu chữ giá trị
  },
  listItem: {
    fontSize: 16,
    color: '#00695c', // Màu chữ danh sách điểm mạnh/yếu
    marginLeft: 10,
    marginBottom: 5,
  },
});
