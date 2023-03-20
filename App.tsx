import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import styles from './styles.js';

function App() {
  // Kullanıcının görevinin,adının,soyadının ve eklenen görev-isim-soyisimlerinin tutulduğu 4 farklı state tanımladım.
  const [task, setTask] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [text, setText] = useState([]);

  // Kullanıcıdan kesinlikle input almayı sağlıyorum. ! işareti, bir değişkenin veya ifadenin tersini alır.Eğer task, name veya surname değişkenlerinden herhangi biri falsy değerse, koşul doğru olur ve if bloğu içindeki kod çalıştırılır.
  const handleClick = () => {
    if (!task || !name || !surname) {
      Alert.alert('Lütfen tüm alanları doldurun');
      return;
    }

    //Text dizisinin öğelerini kopyalamak için Spread operatörünü kullandım ve yeni dizi oluşturdum. Push methodu ile diziye yeni eleman ekliyorum.
    const newOutput = [...text];
    newOutput.push(`${task}: ${name} ${surname}`); // Bu satır ne yaparsam yapayım kırmızı yandı????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    // newOutput.push(task + ' ' + name + ' ' + surname) ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

    // üç adet set işlevi kullanarak değişkenlerin değerlerini güncelliyorum.
    setText(newOutput);
    setTask('');
    setName('');
    setSurname('');
  };

  //Diziden elemanı silmek için splice methodunu kullandım. delete fonksiyonu index parametresini alarak text dizisinden o indexteki elemanı çıkartıyor ve yeni halini state'e kaydediyor.
  const handleDelete = index => {
    const newOutput = [...text];
    newOutput.splice(index, 1);
    setText(newOutput);
  };

  //FlatList karışık olmasın diye silme işlemini burada yazdım. onPress fonksiyonunu içerisinde delete fonksiyonunu kullanıyorum ve silme işlemini gerçekleştiriyorum. item ve index tanımlı olmadığı için kırmızı yanıyor yani react-native haklı o yüzden bu kodda sinirlenmedim ama çok uğraştırdı.
  const renderListItem = ({item, index}) => (
    <View style={styles.textContainer}>
      <Text style={styles.textFirst}>{item}</Text>
      <TouchableOpacity
        style={styles.textDelete}
        onPress={() => handleDelete(index)}>
        <Text style={styles.textSecond}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Bilgileri GİRİN</Text>
        <TextInput
          style={styles.input}
          placeholder="Görevi giriniz..."
          onChangeText={setTask}
          value={task}
          keyboardType="numeric" // Burada klavyede sadece numaraları gösterebiliyoruz. Böyle bir özellik var elim alışsın diye yazdım. Zaten simülatörde gözükmüyor.
        />

        <TextInput
          style={styles.input}
          placeholder="Adınızı giriniz..."
          onChangeText={setName}
          value={name}
        />

        <TextInput
          style={styles.input}
          placeholder="Soyadınızı giriniz.."
          onChangeText={setSurname}
          value={surname}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>

        <FlatList
          data={text}
          renderItem={renderListItem}
          //index.toString() dememin nedeni bize her diziyi temsil eden farklı bir sayı vermesi için. aynı görevi olan insanlar olursa uygulama hata veriyor. Bu yüzden keyExtractor kullanmak zorunda kaldım. 00.59a kadar buna uğraştım.
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
