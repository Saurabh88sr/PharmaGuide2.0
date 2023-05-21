const savedMedicineKey = "savedMedicine";

export const getSavedMedicine = () => {
  const savedMedicineData = localStorage.getItem(savedMedicineKey);
  if (savedMedicineData) {
    return JSON.parse(savedMedicineData);
  }
  return [];
};

export const saveMedicine = (medicine) => {
  const savedMedicineData = getSavedMedicine();
  const updatedMedicineData = [...savedMedicineData, medicine];
  localStorage.setItem(savedMedicineKey, JSON.stringify(updatedMedicineData));
};

export const unsaveMedicine = (medicineId) => {
  const savedMedicineData = getSavedMedicine();
  const updatedMedicineData = savedMedicineData.filter(
    (item) => item.id !== medicineId
  );
  localStorage.setItem(savedMedicineKey, JSON.stringify(updatedMedicineData));
};
