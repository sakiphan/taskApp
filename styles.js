import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 15, //Hem sağdan hem soldan boşluk
    margin: 15,
  },
  title: {
    fontSize: 30,
    color: 'cyan',
  },

  input: {
    paddingVertical: 12, // Üstten ve aşağıdan boşluk. Aslında padding-top + padding-bottomun toplamı.
    paddingHorizontal: 16, // sağdan soldan boşluk
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 20,
    marginTop: 25, // Üstten boşluk
  },
  buttonContainer: {
    backgroundColor: 'navy',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'flex-end',
    alignSelf: 'center', // Butonu sadece sağda göstermek için yani kırptım.
    marginTop: 20, // Yukarıdan boşluk
  },
  buttonText: {
    fontSize: 20,
    color: 'yellow', //css berbat olduğu için direk sarı lacivert yaptım renkleri.
  },

  textContainer: {
    borderBottomWidth: 2,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  textFirst: {
    fontSize: 20,
  },
  textDelete: {
    width: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'white',
  },
  textSecond: {
    fontSize: 20,
  },
});
