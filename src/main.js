var Employee = /** @class */ (function () {
    function Employee(Numbers, Surname, Name, Power, TypeCard) {
        this.Numbers = Numbers;
        this.Surname = Surname;
        this.Name = Name;
        this.Power = Power;
        this.TypeCard = TypeCard;
    }
    return Employee;
}());
var statuses = [
    new Employee(22, "Mazurek", "Remigiusz", 5, "Menedzer"),
    new Employee(1128, "Chmielewski", "Kornel", 5, "Dozorca"),
    new Employee(1032, "Malinowski", "Marcel", 5, "Dozorca"),
    new Employee(230, "Baran", "Dorbomil", 5, "Pracownik Sortowni"),
    new Employee(412, "Ostrowski", "Alex", 5, "Pracownik Sortowni"),
    new Employee(351, "Wozniak", "Amir", 5, "Pracownik Sortowni"),
    new Employee(254, "Wroblewski", "Gniewomir", 5, "Pracownik Sortowni"),
    new Employee(123, "Kowalski", "Dorian", 5, "Pracownik Airstrip"),
    new Employee(107, "Sokolowski", "Maurcycu", 5, "Pracownik Airstrip"),
    new Employee(186, "Maurcycy", "Areil", 5, "Pracownik Airstrip"),
    new Employee(665, "Kazmierczak", "Cezary", 5, "Pracownik Transportu"),
    new Employee(725, "Szulc", "Blazej", 5, "Pracownik Transportu"),
];
function AreaAirstrip(Power) {
}
function AreaSort(Power) {
}
function AreaStorage(Power) {
}
function AreaLoading(Power) {
}
function AreaOutside(Power) {
}
